// Day 223: Native HTTP Server
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from native Node.js HTTP server!');
});

server.listen(5000, () => console.log('Server running on port 5000'));
