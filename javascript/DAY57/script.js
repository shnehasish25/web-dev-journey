// Day 57: Array Aggregation: reduce()
// Topic: Accumulating an array into a single total value.

console.log("Day 57 script initialized: Array Aggregation: reduce()");

// Core code demonstration
const bill = [120, 45, 80].reduce((acc, curr) => acc + curr, 0); console.log('Total ₹' + bill);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 57 Demo Executed:</strong><br>Array Aggregation: reduce() ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
