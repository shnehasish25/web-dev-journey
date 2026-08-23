// Day 323: Live reloading with Bind Mount
const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Live Hot-Reloading in Container is ACTIVE!',
    tip: 'Edit this response string and save. Container reloads automatically via Bind Mount!',
    hub: 'HSR Layout Sector 4, Bengaluru'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Development server with hot-reload running on port ${PORT}`);
});
