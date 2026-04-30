// Day 235: Response Methods
const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  res.status(200).json({ success: true, timestamp: Date.now() });
});

app.listen(3004);
