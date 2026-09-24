const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'HEALTHY',
    service: 'QuickBite Core API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.get('/api/stores', (req, res) => {
  res.json({
    stores: [
      { id: 1, name: 'Bellandur Dark Store', pincode: '560103', activeRiders: 18 },
      { id: 2, name: 'Indiranagar Hub', pincode: '560038', activeRiders: 24 },
      { id: 3, name: 'HSR Sector 2 Hub', pincode: '560102', activeRiders: 15 }
    ]
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend server active on port ${PORT}`);
});
