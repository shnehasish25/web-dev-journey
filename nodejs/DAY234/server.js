// Day 234: Query Params
const express = require('express');
const app = express();

app.get('/api/search', (req, res) => {
  const { query, limit = 10 } = req.query;
  res.json({ searchingFor: query, maxResults: parseInt(limit) });
});

app.listen(3003);
