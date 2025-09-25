// Day 92: Audio API & Sound Effects
// Topic: new Audio() and playback control.

console.log("Day 92 script initialized: Audio API & Sound Effects");

// Core code demonstration
const ding = new Audio('ding.mp3'); ding.play().catch(e => console.log('User interaction required'));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 92 Demo Executed:</strong><br>Audio API & Sound Effects ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
