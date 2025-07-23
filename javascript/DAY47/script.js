// Day 47: String Methods
// Topic: slice, substring, trim, toUpperCase, includes, split.

console.log("Day 47 script initialized: String Methods");

// Core code demonstration
const query = '   Butter Dosa   '; console.log(query.trim().toLowerCase());

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 47 Demo Executed:</strong><br>String Methods ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
