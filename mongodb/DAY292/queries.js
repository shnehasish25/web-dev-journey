// Day 292: Array Operations
// Add new food tags without duplicates
db.restaurants.updateOne(
  { name: "Udupi Tiffin Hall" },
  { 
    $addToSet: { tags: { $each: ["Filter Coffee", "Crispy Dosa", "South Indian"] } }
  }
);

// Remove a discontinued dish from specials array
db.restaurants.updateOne(
  { name: "Udupi Tiffin Hall" },
  { $pull: { specials: "Discontinued Item" } }
);
