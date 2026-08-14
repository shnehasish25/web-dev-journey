// Express microservice demonstrating parameterized queries and atomic transactions
const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json());

// 1. Fetch menu items (Parameterized query)
app.get('/api/menu', async (req, res) => {
  try {
    const { category } = req.query;
    let queryText = 'SELECT * FROM menu_items WHERE is_available = true';
    const params = [];

    if (category) {
      params.push(category);
      queryText += ' AND category = $1';
    }
    queryText += ' ORDER BY price_inr ASC';

    const { rows } = await db.query(queryText, params);
    res.json({ success: true, count: rows.length, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 2. Place food order with atomic transaction & inventory check
app.post('/api/orders', async (req, res) => {
  const { customer_id, items } = req.body; // items: [{ item_id, quantity }]
  if (!customer_id || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Invalid order payload' });
  }

  const client = await db.getClient();
  try {
    await client.query('BEGIN');

    let totalAmount = 0;
    // Calculate bill and check availability
    for (const item of items) {
      const itemRes = await client.query(
        'SELECT price_inr FROM menu_items WHERE item_id = $1 FOR UPDATE',
        [item.item_id]
      );
      if (itemRes.rows.length === 0) {
        throw new Error(`Item ID ${item.item_id} not found on menu`);
      }
      totalAmount += parseFloat(itemRes.rows[0].price_inr) * item.quantity;
    }

    // Insert order master
    const orderInsert = await client.query(
      'INSERT INTO food_orders (customer_id, total_amount_inr, order_status) VALUES ($1, $2, $3) RETURNING order_id, ordered_at',
      [customer_id, totalAmount, 'CONFIRMED']
    );
    const orderId = orderInsert.rows[0].order_id;

    // Insert line items
    for (const item of items) {
      await client.query(
        'INSERT INTO order_line_items (order_id, item_id, quantity) VALUES ($1, $2, $3)',
        [orderId, item.item_id, item.quantity]
      );
    }

    await client.query('COMMIT');

    res.status(201).json({
      success: true,
      message: 'Order placed successfully via PostgreSQL transaction!',
      orderId,
      totalAmountInr: totalAmount,
    });
  } catch (error) {
    await client.query('ROLLBACK');
    res.status(500).json({ success: false, error: error.message });
  } finally {
    // Crucial: Always release the client back to pool!
    client.release();
  }
});

const PORT = 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`PostgreSQL API server running on port ${PORT}`));
}

module.exports = app;
