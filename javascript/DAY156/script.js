// Day 156: Project 5: 5-Day Forecast & Storage (Part 2)
// Topic: Saving favorite Indian cities in localStorage.

console.log("Day 156 script initialized: Project 5: 5-Day Forecast & Storage (Part 2)");

// Core code demonstration
function saveFavCity(name, coords){ const favs = JSON.parse(localStorage.getItem('favCities') || '[]'); favs.push({name, coords}); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 156 Demo Executed:</strong><br>Project 5: 5-Day Forecast & Storage (Part 2) ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
