// Day 229: URL Search Params
const http = require('http');

http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, 'http://localhost:5006');
  const city = parsedUrl.searchParams.get('city') || 'Bengaluru';
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ queryCity: city }));
}).listen(5006);
