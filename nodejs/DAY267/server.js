// Day 267: JWT Sign
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 'u101', role: 'student' }, 'dev-secret-key', { expiresIn: '1d' });
console.log("Generated Token:", token);
