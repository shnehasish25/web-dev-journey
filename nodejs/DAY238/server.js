// Day 238: Custom Auth Middleware
const express = require('express');
const app = express();

const checkApiKey = (req, res, next) => {
  const key = req.headers['x-api-key'];
  if (key !== 'secret-bengaluru-token') {
    return res.status(401).json({ error: 'Unauthorized: Invalid API Key' });
  }
  next();
};

app.get('/api/secure-data', checkApiKey, (req, res) => {
  res.json({ secret: 'Hostel WiFi Password: 42' });
});

app.listen(3007);
