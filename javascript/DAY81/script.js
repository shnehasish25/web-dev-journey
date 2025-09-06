// Day 81: Timers: setTimeout & clearTimeout
// Topic: Running code after a delay.

console.log("Day 81 script initialized: Timers: setTimeout & clearTimeout");

// Core code demonstration
const timer = setTimeout(() => console.log('Executed after 2s'), 2000);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 81 Demo Executed:</strong><br>Timers: setTimeout & clearTimeout ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
