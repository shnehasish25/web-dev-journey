// Day 98: Promises: resolve & reject
// Topic: Promise state lifecycle: pending, fulfilled, rejected.

console.log("Day 98 script initialized: Promises: resolve & reject");

// Core code demonstration
const order = new Promise((resolve, reject) => { const success = true; success ? resolve('Order Placed') : reject('Payment Failed'); });

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 98 Demo Executed:</strong><br>Promises: resolve & reject ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
