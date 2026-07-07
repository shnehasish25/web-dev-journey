// Day 286: Final Capstone Server
const express = require('express');
const app = express();
app.use(express.json());

// In-memory order state store
const orders = {};

// Order creation endpoint
app.post('/api/orders/create', (req, res) => {
  const { items, total } = req.body;
  const orderId = `ORD_${Date.now()}`;
  orders[orderId] = { orderId, items, total, status: 'PENDING_PAYMENT' };
  res.status(201).json({ orderId, total, upiPaymentLink: `upi://pay?pa=kushal@upi&am=${total}&tr=${orderId}` });
});

// Razorpay / UPI Webhook Simulation
app.post('/api/payments/webhook', (req, res) => {
  const { orderId, paymentStatus } = req.body;
  if (orders[orderId]) {
    orders[orderId].status = paymentStatus === 'SUCCESS' ? 'PAID_PREPARING_FOOD' : 'PAYMENT_FAILED';
    console.log(`Order ${orderId} updated to status: ${orders[orderId].status}`);
    return res.json({ success: true, order: orders[orderId] });
  }
  res.status(404).json({ error: 'Order not found' });
});

app.listen(3017, () => console.log('🎉 74-DAY NODE.JS BACKEND MASTERED! Server active on 3017'));
