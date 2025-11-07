// Day 118: Prototypal Inheritance
// Topic: Inheriting properties and methods via prototype chain.

console.log("Day 118 script initialized: Prototypal Inheritance");

// Core code demonstration
console.log([].__proto__ === Array.prototype);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 118 Demo Executed:</strong><br>Prototypal Inheritance ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
