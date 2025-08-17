// Day 67: Selecting Elements: querySelector
// Topic: Grabbing DOM nodes with CSS selector syntax.

console.log("Day 67 script initialized: Selecting Elements: querySelector");

// Core code demonstration
const btn = document.querySelector('#submit-btn'); const cards = document.querySelectorAll('.card');

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 67 Demo Executed:</strong><br>Selecting Elements: querySelector ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
