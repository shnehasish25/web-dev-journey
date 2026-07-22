// Day 297: Grouping & Metrics
db.orders.aggregate([
  { $match: { status: "DELIVERED" } },
  { $group: {
      _id: "$restaurantName", // Group by restaurant
      totalRevenue: { $sum: "$totalAmount" },
      avgOrderValue: { $avg: "$totalAmount" },
      orderCount: { $sum: 1 }
    }
  },
  { $sort: { totalRevenue: -1 } }
]);
