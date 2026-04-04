// Day 220: EventEmitter
const EventEmitter = require('events');
const orderEmitter = new EventEmitter();

orderEmitter.on('orderPlaced', (orderId, total) => {
  console.log(`Notification sent for Order #${orderId}: Total ₹${total}`);
});

orderEmitter.emit('orderPlaced', 1042, 450);
