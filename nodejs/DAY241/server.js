// Day 241: Third-party Middleware
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow frontend on localhost:5173 to access API
app.use(express.json());

app.get('/api/status', (req, res) => res.json({ api: 'online' }));
app.listen(3010);
