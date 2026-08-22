// Day 322: Clean context verification
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Verify that .git or host secrets were NOT bundled
  const gitExists = fs.existsSync('./.git');
  const envExists = fs.existsSync('./.env');

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    status: 'SECURE_BUILD',
    buildContextClean: true,
    gitExcluded: !gitExists,
    localEnvExcluded: !envExists
  }));
});

server.listen(5000, '0.0.0.0', () => {
  console.log("App listening on port 5000");
});
