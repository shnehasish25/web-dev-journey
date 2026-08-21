// Day 321: Layer caching demo
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: "Cached Build Benchmark Microservice",
    cachedBuild: true,
    location: "Indiranagar, Bengaluru"
  }));
});

server.listen(4000, '0.0.0.0', () => {
  console.log("Server running on port 4000");
});
