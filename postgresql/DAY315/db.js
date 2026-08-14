// Database connection pool module using node-postgres
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER || 'postgres',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'webdev_db',
  password: process.env.PGPASSWORD || 'postgres',
  port: parseInt(process.env.PGPORT || '5432', 10),
  max: 20, // Max concurrent connections in pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.on('error', (err) => {
  console.error('[PG Pool Error]: Unexpected error on idle client', err);
});

module.exports = {
  // Shortcut query helper
  query: (text, params) => pool.query(text, params),
  // Direct client checkout for multi-step transactions
  getClient: () => pool.connect(),
};
