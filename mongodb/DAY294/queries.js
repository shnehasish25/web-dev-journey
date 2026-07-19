// Day 294: Indexes
// Create compound index for fast restaurant filtering
db.restaurants.createIndex({ locality: 1, rating: -1 });

// Create unique index to prevent duplicate mobile registrations
db.users.createIndex({ mobile: 1 }, { unique: true });

// Verify execution stats
db.restaurants.find({ locality: "Koramangala" }).explain("executionStats");
