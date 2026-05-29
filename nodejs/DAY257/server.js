// Day 257: Create Document
async function createDish() {
  const dish = await Dish.create({ name: 'Masala Dosa', price: 120, isVeg: true });
  console.log("Dish created with ID:", dish._id);
}
