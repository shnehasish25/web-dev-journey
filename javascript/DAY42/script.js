// Day 42: Conditionals & Strict Equality
// Topic: if, else if, switch, ternary, truthy vs falsy.

console.log("Day 42 script initialized: Conditionals & Strict Equality");

// Core code demonstration
const age = 19; const isEligible = age >= 18 ? 'Eligible' : 'Minor'; console.log(isEligible);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 42 Demo Executed:</strong><br>Conditionals & Strict Equality ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
