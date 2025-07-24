// Day 48: Number Methods & Precision
// Topic: parseInt, parseFloat, toFixed, Number.isNaN.

console.log("Day 48 script initialized: Number Methods & Precision");

// Core code demonstration
const price = 49.999; console.log(price.toFixed(2)); console.log(parseInt('120px', 10));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 48 Demo Executed:</strong><br>Number Methods & Precision ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
