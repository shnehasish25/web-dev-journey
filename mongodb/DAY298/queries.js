// Day 298: Joins with $lookup
db.orders.aggregate([
  // Join with users collection
  { $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "customerDetails"
    }
  },
  // Flatten single customer array to object
  { $unwind: "$customerDetails" },
  { $project: {
      orderId: 1,
      total: 1,
      customerName: "$customerDetails.name",
      customerMobile: "$customerDetails.mobile"
    }
  }
]);
