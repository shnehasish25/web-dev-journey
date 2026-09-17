const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    securityStatus: 'HARDENED',
    currentUserUID: process.getuid(),
    isRoot: process.getuid() === 0,
    message: 'Running safely as non-root user (node)!'
  }));
});

server.listen(3000, '0.0.0.0', () => {
  console.log(`Secure server listening on port 3000 as UID ${process.getuid()}`);
});
