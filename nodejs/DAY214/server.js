// Day 214: Reading Command Line Arguments
const args = process.argv.slice(2);
const username = args[0] || 'Kushal';
console.log(`Hello ${username}! Welcome to backend engineering.`);
