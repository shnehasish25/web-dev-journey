// Day 217: ES Module Export
export const formatCurrency = (amt) => `₹${amt.toLocaleString('en-IN')}`;
export const calculateGst = (amt, rate = 0.05) => amt * rate;
