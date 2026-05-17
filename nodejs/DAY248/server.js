// Day 248: Dotenv
require('dotenv').config();
const PORT = process.env.PORT || 4000;
console.log("Server configured for port:", PORT);
console.log("Database URL configured:", process.env.MONGO_URI ? "YES" : "NO");
