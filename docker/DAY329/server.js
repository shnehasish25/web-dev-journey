const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 4000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.get('/api/health', (req, res) => res.json({ status: 'OK' }));

app.get('/api/payments', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT NOW() as current_time, current_database() as db_name');
    res.json({ success: true, serverTime: rows[0].current_time, database: rows[0].db_name });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, '0.0.0.0', () => console.log(`Payment API listening on ${PORT}`));
