// Day 137: Memory Management & Leaks
// Topic: Garbage collection and reference cycles.

console.log("Day 137 script initialized: Memory Management & Leaks");

// Core code demonstration
// Always remove event listeners when tearing down dynamic components

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 137 Demo Executed:</strong><br>Memory Management & Leaks ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
