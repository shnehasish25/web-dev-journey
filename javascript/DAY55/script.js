// Day 55: Array Transformation: map()
// Topic: Creating a brand new transformed array.

console.log("Day 55 script initialized: Array Transformation: map()");

// Core code demonstration
const inrPrices = [10, 20, 30].map(p => p * 84); console.log(inrPrices);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 55 Demo Executed:</strong><br>Array Transformation: map() ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
