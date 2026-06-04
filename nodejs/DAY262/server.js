// Day 262: Pre-save hook
const userSchema = new mongoose.Schema({ password: String });
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  // Hash password here before saving
  next();
});
