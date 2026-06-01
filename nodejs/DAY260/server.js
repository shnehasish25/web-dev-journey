// Day 260: Delete Document
async function deleteDish(id) {
  await Dish.findByIdAndDelete(id);
  console.log("Dish permanently deleted");
}
