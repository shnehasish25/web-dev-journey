// Day 320: Express microservice inside Docker container
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const CITY = process.env.CITY || 'Bengaluru';

app.get('/', (req, res) => {
  res.json({
    status: 'ONLINE',
    message: 'Namaskara from Dockerized Node.js service!',
    city: CITY,
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    containerHostname: require('os').hostname()
  });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'HEALTHY' });
});

// Important: Listen on 0.0.0.0 to accept traffic from outside the container
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Node app listening on http://0.0.0.0:${PORT}`);
});
