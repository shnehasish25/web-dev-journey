// Day 274: Auth Server
const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/auth/login', (req, res) => {
  res.json({ token: 'mock-jwt-token-xyz' });
});

app.listen(3015);
