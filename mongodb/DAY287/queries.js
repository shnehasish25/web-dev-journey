// Day 287: mongosh Basics
// show dbs
// use swiggy_db
// show collections

// Checking ObjectId timestamp
const id = new ObjectId();
console.log("Generated ObjectId:", id);
console.log("Embedded Timestamp:", id.getTimestamp());
