// Day 291: Updates
// Increment total reviews count and update rating
db.restaurants.updateOne(
  { name: "Udupi Tiffin Hall" },
  { 
    $set: { rating: 4.7 },
    $inc: { totalReviews: 1 } // Atomic increment
  },
  { upsert: true }
);
