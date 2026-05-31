// Day 259: Update Document
async function updatePrice(id, newPrice) {
  const updated = await Dish.findByIdAndUpdate(
    id, 
    { price: newPrice }, 
    { new: true, runValidators: true }
  );
  return updated;
}
