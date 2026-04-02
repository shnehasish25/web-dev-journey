// Day 218: Path Module
const path = require('path');
const fullPath = path.join(__dirname, 'data', 'orders.json');
console.log("Resolved path:", fullPath);
console.log("File extension:", path.extname(fullPath));
