// Day 251: Rate Limiter Concept
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 5, // 5 requests max
  message: { error: 'Too many login attempts. Try again after 15 minutes.' }
});
