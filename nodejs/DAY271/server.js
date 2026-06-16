// Day 271: Crypto Token
const crypto = require('crypto');
const resetToken = crypto.randomBytes(32).toString('hex');
const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
console.log("Raw Token for Email:", resetToken);
