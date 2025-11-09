// Day 119: ES6 Classes & Syntax
// Topic: Modern syntax for object-oriented programming.

console.log("Day 119 script initialized: ES6 Classes & Syntax");

// Core code demonstration
class Account { constructor(owner, balance){ this.owner = owner; this.balance = balance; } }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 119 Demo Executed:</strong><br>ES6 Classes & Syntax ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
