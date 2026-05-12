// Day 245: Pagination Logic
const paginate = (items, page = 1, limit = 5) => {
  const startIndex = (page - 1) * limit;
  return items.slice(startIndex, startIndex + limit);
};
console.log(paginate([1,2,3,4,5,6,7,8,9,10], 2, 3)); // items 4, 5, 6
