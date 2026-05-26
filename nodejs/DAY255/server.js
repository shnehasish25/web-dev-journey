// Day 255: Schema & Model
const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  isVeg: { type: Boolean, default: true }
});

const Dish = mongoose.model('Dish', dishSchema);
