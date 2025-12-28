// Day 153: Project 4: Typing Speed Test (Part 1)
// Topic: WPM calculator, accuracy counter, passage selector.

console.log("Day 153 script initialized: Project 4: Typing Speed Test (Part 1)");

// Core code demonstration
function calcWPM(chars, timeSec){ return Math.round((chars / 5) / (timeSec / 60)); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 153 Demo Executed:</strong><br>Project 4: Typing Speed Test (Part 1) ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
