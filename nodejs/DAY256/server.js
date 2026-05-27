// Day 256: Custom Validation
const studentSchema = new mongoose.Schema({
  mobile: {
    type: String,
    validate: {
      validator: (v) => /^[6-9]\d{9}$/.test(v),
      message: 'Mobile number must be a valid 10-digit Indian number!'
    }
  }
});
