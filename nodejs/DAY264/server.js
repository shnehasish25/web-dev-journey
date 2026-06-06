// Day 264: Mongoose Order API
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/orders', (req, res) => res.json({ orders: [] }));
app.listen(3014);
