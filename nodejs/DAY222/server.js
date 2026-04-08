// Day 222: System Health Monitor
const os = require('os');
const freeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
const totalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
console.log(`System: ${os.type()} | Free RAM: ${freeMem} GB / ${totalMem} GB | Cores: ${os.cpus().length}`);
