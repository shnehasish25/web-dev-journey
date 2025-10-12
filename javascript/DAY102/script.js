// Day 102: Async / Await Syntax
// Topic: Syntactic sugar making async code read synchronously.

console.log("Day 102 script initialized: Async / Await Syntax");

// Core code demonstration
async function loadData(){ const res = await fetch('/api'); return res.json(); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 102 Demo Executed:</strong><br>Async / Await Syntax ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
