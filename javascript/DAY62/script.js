// Day 62: Destructuring: Arrays & Objects
// Topic: Unpacking values into distinct variables.

console.log("Day 62 script initialized: Destructuring: Arrays & Objects");

// Core code demonstration
const order = { id: 101, amount: 450 }; const { id, amount } = order; console.log(id, amount);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 62 Demo Executed:</strong><br>Destructuring: Arrays & Objects ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
