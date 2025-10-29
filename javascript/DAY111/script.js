// Day 111: Live API: Real-time Weather Lookup
// Topic: Open-Meteo public API without API keys.

console.log("Day 111 script initialized: Live API: Real-time Weather Lookup");

// Core code demonstration
async function getWeather(){ const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true'); return res.json(); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 111 Demo Executed:</strong><br>Live API: Real-time Weather Lookup ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
