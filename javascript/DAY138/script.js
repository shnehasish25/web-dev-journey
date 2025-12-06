// Day 138: Regular Expressions (Regex) in JS
// Topic: RegExp constructor, test(), match(), replace().

console.log("Day 138 script initialized: Regular Expressions (Regex) in JS");

// Core code demonstration
const isValidMobile = /^[6-9]\d{9}$/.test('9876543210'); console.log(isValidMobile);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 138 Demo Executed:</strong><br>Regular Expressions (Regex) in JS ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
