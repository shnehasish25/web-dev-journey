// Day 61: Object Static Methods
// Topic: Object.keys, Object.values, Object.entries, assign.

console.log("Day 61 script initialized: Object Static Methods");

// Core code demonstration
const stats = { wins: 8, losses: 4 }; console.log(Object.keys(stats), Object.values(stats));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 61 Demo Executed:</strong><br>Object Static Methods ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
