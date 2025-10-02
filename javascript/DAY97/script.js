// Day 97: Callbacks & Callback Hell
// Topic: Passing functions to handle async completion.

console.log("Day 97 script initialized: Callbacks & Callback Hell");

// Core code demonstration
function step1(cb){ setTimeout(() => { console.log('Step 1'); cb(); }, 500); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 97 Demo Executed:</strong><br>Callbacks & Callback Hell ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
