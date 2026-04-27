// Day 233: Route Params
const express = require('express');
const app = express();

app.get('/api/metro/:stationId', (req, res) => {
  const { stationId } = req.params;
  res.json({ station: stationId, status: 'Operational' });
});

app.listen(3002);
