// Day 244: In-Memory CRUD
const express = require('express');
const app = express();
app.use(express.json());

let dishes = [{ id: 1, name: 'Dosa', price: 120 }];

app.get('/api/dishes', (req, res) => res.json(dishes));
app.post('/api/dishes', (req, res) => {
  const newDish = { id: Date.now(), ...req.body };
  dishes.push(newDish);
  res.status(201).json(newDish);
});
app.listen(3012);
