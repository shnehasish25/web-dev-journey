// Day 232: CRUD Routes
const express = require('express');
const app = express();

app.get('/dishes', (req, res) => res.json([{ id: 1, name: 'Masala Dosa' }]));
app.post('/dishes', (req, res) => res.status(201).json({ msg: 'Dish created' }));
app.delete('/dishes/:id', (req, res) => res.json({ msg: 'Dish deleted' }));

app.listen(3001);
