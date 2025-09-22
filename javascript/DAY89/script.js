// Day 89: Clipboard API: Copy to Clipboard
// Topic: navigator.clipboard.writeText.

console.log("Day 89 script initialized: Clipboard API: Copy to Clipboard");

// Core code demonstration
navigator.clipboard.writeText('kushal@upi').then(() => alert('Copied UPI ID!'));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 89 Demo Executed:</strong><br>Clipboard API: Copy to Clipboard ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
