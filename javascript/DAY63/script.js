// Day 63: Spread Operator & Rest Parameters
// Topic: Copying objects/arrays and variable arguments.

console.log("Day 63 script initialized: Spread Operator & Rest Parameters");

// Core code demonstration
const merged = [...['a', 'b'], ...['c', 'd']]; function sumAll(...nums){ return nums.reduce((a,b)=>a+b); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 63 Demo Executed:</strong><br>Spread Operator & Rest Parameters ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
