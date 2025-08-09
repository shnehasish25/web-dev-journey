// Day 59: Object Basics & Key-Value Pairs
// Topic: Object literals, dot vs bracket notation.

console.log("Day 59 script initialized: Object Basics & Key-Value Pairs");

// Core code demonstration
const item = { title: 'Filter Coffee', price: 30 }; console.log(item.title, item['price']);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 59 Demo Executed:</strong><br>Object Basics & Key-Value Pairs ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
