// Day 64: Optional Chaining & Nullish Coalescing
// Topic: Safe property navigation and default values.

console.log("Day 64 script initialized: Optional Chaining & Nullish Coalescing");

// Core code demonstration
const user = {}; console.log(user?.address?.city ?? 'Bengaluru');

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 64 Demo Executed:</strong><br>Optional Chaining & Nullish Coalescing ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
