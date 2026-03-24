// Day 213: Node.js Runtime Check
console.log("Namaste from Node.js runtime!");
console.log("Node version:", process.version);
console.log("Platform:", process.platform);
console.log("Memory usage:", Math.round(process.memoryUsage().heapUsed / 1024 / 1024), "MB");
