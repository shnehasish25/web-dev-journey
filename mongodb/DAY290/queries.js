// Day 290: Sorting and Pagination
// Page 2: Skip 10, Limit 5, Sort by rating descending
db.restaurants.find(
  { city: "Bengaluru" },
  { name: 1, rating: 1, locality: 1, _id: 0 } // Projection
)
.sort({ rating: -1 })
.skip(10)
.limit(5);
