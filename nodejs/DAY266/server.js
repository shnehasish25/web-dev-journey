// Day 266: Bcrypt Hashing
const bcrypt = require('bcryptjs');

async function testHash() {
  const password = 'hostelPassword123';
  const hashed = await bcrypt.hash(password, 12);
  const isMatch = await bcrypt.compare(password, hashed);
  console.log("Password matches hash:", isMatch);
}
testHash();
