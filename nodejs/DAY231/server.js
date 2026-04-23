// Day 231: Express Setup
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Namaste Express.js!');
});

app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));
