// Day 240: Error Handler
const express = require('express');
const app = express();

app.get('/boom', (req, res, next) => {
  next(new Error('Database connection failed!'));
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error("Caught error:", err.message);
  res.status(500).json({ error: true, message: err.message });
});

app.listen(3009);
