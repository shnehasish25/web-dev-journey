// Day 80: Mini-Project: Interactive Tatkal Booking Form
// Topic: Live validation, regex check, dynamic review summary.

console.log("Day 80 script initialized: Mini-Project: Interactive Tatkal Booking Form");

// Core code demonstration
function validateTatkalForm(data){ return /^[6-9]\d{9}$/.test(data.mobile); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 80 Demo Executed:</strong><br>Mini-Project: Interactive Tatkal Booking Form ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
