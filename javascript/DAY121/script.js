// Day 121: Class Inheritance: extends & super
// Topic: Subclassing and calling parent constructors.

console.log("Day 121 script initialized: Class Inheritance: extends & super");

// Core code demonstration
class SavingsAccount extends Account { constructor(owner, balance, interest){ super(owner, balance); this.interest = interest; } }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 121 Demo Executed:</strong><br>Class Inheritance: extends & super ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
