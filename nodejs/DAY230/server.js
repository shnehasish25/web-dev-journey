// Day 230: Pure Node API
const http = require('http');
let students = [{ id: 1, name: 'Kushal', city: 'Bengaluru' }];

http.createServer((req, res) => {
  if (req.url === '/api/students' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(students));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
}).listen(5007);
