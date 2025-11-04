// Day 117: Prototypes & Prototype Chain
// Topic: How JavaScript shares methods between instances.

console.log("Day 117 script initialized: Prototypes & Prototype Chain");

// Core code demonstration
User.prototype.greet = function(){ return `Hello, ${this.name}`; };

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 117 Demo Executed:</strong><br>Prototypes & Prototype Chain ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
