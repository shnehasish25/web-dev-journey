// Day 43: Functions & Scope
// Topic: Declarations, expressions, arrow functions, return values.

console.log("Day 43 script initialized: Functions & Scope");

// Core code demonstration
const toInr = (usd, rate = 84.5) => (usd * rate).toFixed(2); console.log(toInr(50));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 43 Demo Executed:</strong><br>Functions & Scope ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
