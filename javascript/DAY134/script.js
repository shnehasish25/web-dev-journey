// Day 134: Performance: Debouncing
// Topic: Limiting high-frequency event firing.

console.log("Day 134 script initialized: Performance: Debouncing");

// Core code demonstration
function debounce(fn, delay){ let t; return (...args) => { clearTimeout(t); t = setTimeout(()=>fn(...args), delay); }; }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 134 Demo Executed:</strong><br>Performance: Debouncing ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
