// Day 139: Custom Events in JavaScript
// Topic: Building loosely coupled component communication.

console.log("Day 139 script initialized: Custom Events in JavaScript");

// Core code demonstration
window.addEventListener('cartUpdated', (e) => console.log('Cart count:', e.detail.count));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 139 Demo Executed:</strong><br>Custom Events in JavaScript ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
