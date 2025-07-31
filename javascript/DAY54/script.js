// Day 54: Array Iteration: forEach
// Topic: Executing a callback function for each array element.

console.log("Day 54 script initialized: Array Iteration: forEach");

// Core code demonstration
const prices = [100, 200, 300]; prices.forEach(p => console.log('Item price: ₹' + p));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 54 Demo Executed:</strong><br>Array Iteration: forEach ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
