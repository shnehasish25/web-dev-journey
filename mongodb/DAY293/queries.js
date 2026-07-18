// Day 293: Deletes
// Soft delete cancelled orders
db.orders.updateMany(
  { status: "CANCELLED", createdAt: { $lt: new Date("2024-01-01") } },
  { $set: { isArchived: true } }
);

// Hard delete temporary carts
db.carts.deleteMany({ isAbandoned: true });
