// Day 263: Populate
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  total: Number
});
// Order.find().populate('user', 'name email');
