// Day 158: Capstone Part 1: Product Catalog & Cart State
// Topic: Dynamic item cards, quantity increment/decrement, live totals.

console.log("Day 158 script initialized: Capstone Part 1: Product Catalog & Cart State");

// Core code demonstration
const cart = {}; function addToCart(id){ cart[id] = (cart[id] || 0) + 1; renderCart(); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 158 Demo Executed:</strong><br>Capstone Part 1: Product Catalog & Cart State ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
