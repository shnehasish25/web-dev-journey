// Day 254: Mongoose Connection
const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/kushal_db');
    console.log("MongoDB Connected Successfully!");
  } catch (err) {
    console.error("DB Connection Failed:", err.message);
  }
}
