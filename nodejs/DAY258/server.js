// Day 258: Find Queries
async function getVegDishes() {
  const vegDishes = await Dish.find({ isVeg: true }).sort({ price: 1 });
  console.log("Veg Dishes:", vegDishes);
}
