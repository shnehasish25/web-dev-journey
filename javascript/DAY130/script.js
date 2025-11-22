// Day 130: Mini-Project: UPI Wallet & Bank Simulator
// Topic: OOP classes for accounts, transactions, and passbook.

console.log("Day 130 script initialized: Mini-Project: UPI Wallet & Bank Simulator");

// Core code demonstration
class BankApp { transfer(from, to, amount){ if(from.balance >= amount){ from.balance -= amount; to.balance += amount; } } }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 130 Demo Executed:</strong><br>Mini-Project: UPI Wallet & Bank Simulator ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
