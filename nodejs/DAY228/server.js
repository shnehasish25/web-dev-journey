// Day 228: Reading POST Body
const http = require('http');

http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      const parsed = JSON.parse(body || '{}');
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Data received', data: parsed }));
    });
  }
}).listen(5005);
