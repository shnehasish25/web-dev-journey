// Day 150: Project 2: Expense Charts & Budget Limits (Part 2)
// Topic: Visual breakdown and budget warning alerts.

console.log("Day 150 script initialized: Project 2: Expense Charts & Budget Limits (Part 2)");

// Core code demonstration
function checkBudget(total, limit = 5000){ return total > limit ? 'Over Budget' : 'Within Budget'; }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 150 Demo Executed:</strong><br>Project 2: Expense Charts & Budget Limits (Part 2) ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
