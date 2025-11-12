// Day 122: Static Methods & Properties
// Topic: Methods called on the Class itself, not instances.

console.log("Day 122 script initialized: Static Methods & Properties");

// Core code demonstration
class Utils { static formatINR(n){ return `₹${n.toFixed(2)}`; } }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 122 Demo Executed:</strong><br>Static Methods & Properties ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
