// Day 112: Crypto & Exchange Rate Tracker
// Topic: Public currency rates API.

console.log("Day 112 script initialized: Crypto & Exchange Rate Tracker");

// Core code demonstration
async function getRates(){ const res = await fetch('https://open.er-api.com/v6/latest/USD'); return res.json(); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 112 Demo Executed:</strong><br>Crypto & Exchange Rate Tracker ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
