// Day 69: Attribute Manipulation & Dataset
// Topic: getAttribute, setAttribute, data-* attributes.

console.log("Day 69 script initialized: Attribute Manipulation & Dataset");

// Core code demonstration
const link = document.querySelector('a'); link.setAttribute('target', '_blank');

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 69 Demo Executed:</strong><br>Attribute Manipulation & Dataset ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
