// Day 40: Variables & Data Types
// Topic: let vs const vs var, primitives vs reference types.

console.log("Day 40 script initialized: Variables & Data Types");

// Core code demonstration
const myName = 'Kushal'; let hours = 2; console.log(typeof myName, typeof hours);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 40 Demo Executed:</strong><br>Variables & Data Types ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
