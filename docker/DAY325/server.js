// Day 325: Config via Environment Variables
const http = require('http');

const PORT = process.env.PORT || 3000;
const CITY = process.env.CITY || 'Bengaluru';
const APP_NAME = process.env.APP_NAME || 'Node-Service';
const TIMEZONE = process.env.TZ || 'UTC';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    app: APP_NAME,
    city: CITY,
    timezone: TIMEZONE,
    currentTimeLocal: new Date().toString(),
    nodeEnv: process.env.NODE_ENV || 'development',
    razorpayConfigured: Boolean(process.env.RAZORPAY_KEY_ID)
  }));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[${APP_NAME}] Running in ${CITY} on port ${PORT} (${TIMEZONE})`);
});
