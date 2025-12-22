// Day 149: Project 2: Hostel Expense Tracker (Part 1)
// Topic: Expense entries with category, amount in ₹, and date.

console.log("Day 149 script initialized: Project 2: Hostel Expense Tracker (Part 1)");

// Core code demonstration
const expenseState = { balance: 0, transactions: [] };

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 149 Demo Executed:</strong><br>Project 2: Hostel Expense Tracker (Part 1) ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
