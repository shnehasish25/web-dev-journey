// Day 49: Date Object & Formatting
// Topic: new Date, getFullYear, toLocaleDateString, timestamps.

console.log("Day 49 script initialized: Date Object & Formatting");

// Core code demonstration
const now = new Date(); console.log(now.toLocaleDateString('en-IN'));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 49 Demo Executed:</strong><br>Date Object & Formatting ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
