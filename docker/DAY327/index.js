const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    status: 'ACTIVE',
    orchestrator: 'Docker Compose',
    services: ['web-app', 'redis-cache'],
    region: process.env.REGION || 'Bengaluru'
  }));
});

server.listen(3000, '0.0.0.0', () => {
  console.log("Compose app running on http://0.0.0.0:3000");
});
