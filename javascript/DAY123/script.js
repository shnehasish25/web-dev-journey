// Day 123: Private Class Fields (#)
// Topic: True privacy in modern JavaScript.

console.log("Day 123 script initialized: Private Class Fields (#)");

// Core code demonstration
class Wallet { #pin = '1234'; checkPin(p){ return this.#pin === p; } }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 123 Demo Executed:</strong><br>Private Class Fields (#) ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
