// Day 285: Capstone Architecture
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'Swiggy Backend Running' }));
app.listen(3016);
