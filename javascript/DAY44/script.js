// Day 44: Scope & Hoisting
// Topic: Global, function, and block scope. Temporal dead zone.

console.log("Day 44 script initialized: Scope & Hoisting");

// Core code demonstration
function calc() { const blockVal = 100; if(true){ const inner = 200; } } calc();

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 44 Demo Executed:</strong><br>Scope & Hoisting ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
