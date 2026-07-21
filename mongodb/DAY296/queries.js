// Day 296: Aggregation Basics
db.orders.aggregate([
  // Stage 1: Filter paid orders in Bengaluru
  { $match: { city: "Bengaluru", status: "DELIVERED" } },
  
  // Stage 2: Reshape fields and compute total with tax
  { $project: {
      orderId: 1,
      totalAmount: 1,
      gstAmount: { $multiply: ["$totalAmount", 0.05] }
    }
  },
  
  // Stage 3: Sort by total descending
  { $sort: { totalAmount: -1 } },
  { $limit: 10 }
]);
