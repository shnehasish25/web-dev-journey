// Day 155: Project 5: Weather Dashboard (Part 1)
// Topic: Multi-city weather search, dynamic icons, humidity.

console.log("Day 155 script initialized: Project 5: Weather Dashboard (Part 1)");

// Core code demonstration
async function fetchCityWeather(lat, lon){ const r = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`); return r.json(); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 155 Demo Executed:</strong><br>Project 5: Weather Dashboard (Part 1) ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
