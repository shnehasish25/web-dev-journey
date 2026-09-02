const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/swiggy_orders';

let db;

// Connection retry helper
async function connectDB() {
  for (let attempt = 1; attempt <= 10; attempt++) {
    try {
      console.log(`Connecting to Mongo at ${MONGO_URI} (Attempt ${attempt}/10)...`);
      const client = new MongoClient(MONGO_URI);
      await client.connect();
      db = client.db();
      console.log("Successfully connected to MongoDB inside Docker network!");
      return;
    } catch (err) {
      console.error(`Mongo connection failed: ${err.message}. Retrying in 3s...`);
      await new Promise(r => setTimeout(r, 3000));
    }
  }
}

app.get('/api/orders', async (req, res) => {
  try {
    const orders = await db.collection('orders').find({}).limit(20).toArray();
    res.json({ success: true, count: orders.length, data: orders });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const { restaurant, dish, priceInr } = req.body;
    const result = await db.collection('orders').insertOne({
      restaurant: restaurant || 'Meghana Foods',
      dish: dish || 'Special Chicken Biryani',
      priceInr: priceInr || 320.00,
      city: 'Bengaluru',
      createdAt: new Date()
    });
    res.status(201).json({ success: true, orderId: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

connectDB().then(() => {
  app.listen(PORT, '0.0.0.0', () => console.log(`Order API running on port ${PORT}`));
});
