// Day 288: Inserts
db.restaurants.insertMany([
  { name: "Udupi Tiffin Hall", city: "Bengaluru", locality: "Koramangala", rating: 4.6, isVeg: true },
  { name: "Meghana Foods", city: "Bengaluru", locality: "Koramangala", rating: 4.5, isVeg: false },
  { name: "Empire Restaurant", city: "Bengaluru", locality: "Indiranagar", rating: 4.2, isVeg: false }
], { ordered: false });
