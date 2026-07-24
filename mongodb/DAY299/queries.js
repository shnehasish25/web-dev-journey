// Day 299: Capstone Business Analytics Pipeline
db.orders.aggregate([
  { $match: { status: "DELIVERED", createdAt: { $gte: new Date("2024-01-01") } } },
  { $unwind: "$items" },
  { $group: {
      _id: "$items.dishName",
      totalQuantitySold: { $sum: "$items.quantity" },
      totalRevenueGenerated: { $sum: { $multiply: ["$items.price", "$items.quantity"] } }
    }
  },
  { $sort: { totalQuantitySold: -1 } },
  { $limit: 5 },
  { $project: {
      dish: "$_id",
      totalQuantitySold: 1,
      totalRevenueGenerated: 1,
      formattedRevenue: { $concat: ["₹", { $toString: "$totalRevenueGenerated" }] },
      _id: 0
    }
  }
]);
console.log("🎉 13-DAY MONGODB MODULE MASTERED! TOTAL 299 DAYS ACHIEVED!");
