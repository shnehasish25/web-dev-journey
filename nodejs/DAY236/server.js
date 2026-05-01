// Day 236: Middleware Pipeline
const express = require('express');
const app = express();

// Custom logger middleware
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url} at ${new Date().toLocaleTimeString()}`);
  next(); // Pass control to next handler!
});

app.get('/', (req, res) => res.send('Home Page'));
app.listen(3005);
