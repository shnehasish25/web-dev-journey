// Day 252: Menu API
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/restaurants', (req, res) => {
  res.json([{ id: 1, name: 'Udupi Bhavan', city: 'Bengaluru', rating: 4.6 }]);
});

app.listen(3013);
