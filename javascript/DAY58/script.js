// Day 58: Array Search: find, findIndex, some, every
// Topic: Searching items and checking conditions.

console.log("Day 58 script initialized: Array Search: find, findIndex, some, every");

// Core code demonstration
const scores = [85, 92, 45, 78]; console.log(scores.some(s => s < 50));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 58 Demo Executed:</strong><br>Array Search: find, findIndex, some, every ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
