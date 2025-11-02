// Day 115: Mini-Project: Cricinfo Match Tracker
// Topic: Live scores, match summaries, and poll refresh.

console.log("Day 115 script initialized: Mini-Project: Cricinfo Match Tracker");

// Core code demonstration
async function refreshScore(){ const data = await fetchMatchStats(); renderScoreboard(data); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 115 Demo Executed:</strong><br>Mini-Project: Cricinfo Match Tracker ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
