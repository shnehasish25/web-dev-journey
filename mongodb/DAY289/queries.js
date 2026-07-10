// Day 289: Query Filters
// Find high-rated pure veg restaurants in Koramangala
db.restaurants.find({
  $and: [
    { city: "Bengaluru" },
    { locality: "Koramangala" },
    { isVeg: true },
    { rating: { $gte: 4.5 } }
  ]
});
