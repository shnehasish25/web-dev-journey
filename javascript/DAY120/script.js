// Day 120: Class Methods, Getters & Setters
// Topic: get and set keywords.

console.log("Day 120 script initialized: Class Methods, Getters & Setters");

// Core code demonstration
class Product { get formattedPrice(){ return `₹${this.price}`; } }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 120 Demo Executed:</strong><br>Class Methods, Getters & Setters ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
