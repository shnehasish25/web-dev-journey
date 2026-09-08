const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    service: 'Multi-Stage Production Service',
    sizeOptimized: true,
    user: process.getuid ? process.getuid() : 'node',
    city: 'Bengaluru'
  }));
});

server.listen(3000, '0.0.0.0', () => {
  console.log("Production microservice running on port 3000");
});
