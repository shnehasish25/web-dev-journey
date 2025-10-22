// Day 108: Robust Fetch Error Handling
// Topic: Network errors vs HTTP error statuses.

console.log("Day 108 script initialized: Robust Fetch Error Handling");

// Core code demonstration
async function getSafe(url){ const res = await fetch(url); if(!res.ok) throw new Error('Failed'); return res.json(); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 108 Demo Executed:</strong><br>Robust Fetch Error Handling ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
