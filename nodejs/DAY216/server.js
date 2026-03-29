// Day 216: CommonJS Module Pattern
const math = {
  add: (a, b) => a + b,
  toInr: (amount) => `₹${amount.toFixed(2)}`
};
module.exports = math;
