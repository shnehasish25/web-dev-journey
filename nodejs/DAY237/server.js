// Day 237: express.json()
const express = require('express');
const app = express();

app.use(express.json()); // Essential for POST/PUT JSON bodies!
app.use(express.static('public')); // Serves static files

app.post('/api/order', (req, res) => {
  const orderData = req.body;
  res.status(201).json({ status: 'Recorded', orderData });
});

app.listen(3006);
