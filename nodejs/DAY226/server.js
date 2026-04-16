// Day 226: Manual Routing
const http = require('http');

http.createServer((req, res) => {
  const { url, method } = req;
  if (url === '/' && method === 'GET') {
    res.end('Home Page');
  } else if (url === '/api/menu' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify([{ item: 'Masala Dosa', price: 120 }]));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
}).listen(5003);
