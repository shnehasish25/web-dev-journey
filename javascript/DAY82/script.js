// Day 82: Recurring Timers: setInterval
// Topic: Executing code repeatedly on an interval.

console.log("Day 82 script initialized: Recurring Timers: setInterval");

// Core code demonstration
let sec = 0; const interval = setInterval(() => { sec++; if(sec >= 5) clearInterval(interval); }, 1000);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 82 Demo Executed:</strong><br>Recurring Timers: setInterval ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
