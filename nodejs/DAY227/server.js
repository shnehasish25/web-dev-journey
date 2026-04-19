// Day 227: Stream Static File
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  const fileStream = fs.createReadStream(path.join(__dirname, 'index.html'));
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fileStream.pipe(res);
}).listen(5004);
