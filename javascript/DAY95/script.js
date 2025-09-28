// Day 95: Mini-Project: Kadak Chai Brewing Timer
// Topic: Stopwatch with audio notification and controls.

console.log("Day 95 script initialized: Mini-Project: Kadak Chai Brewing Timer");

// Core code demonstration
let timeLeft = 180; function tick(){ if(timeLeft > 0) timeLeft--; else alert('Chai is ready!'); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 95 Demo Executed:</strong><br>Mini-Project: Kadak Chai Brewing Timer ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
