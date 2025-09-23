// Day 90: Geolocation API Basics
// Topic: navigator.geolocation.getCurrentPosition.

console.log("Day 90 script initialized: Geolocation API Basics");

// Core code demonstration
navigator.geolocation.getCurrentPosition(pos => console.log(pos.coords.latitude, pos.coords.longitude));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 90 Demo Executed:</strong><br>Geolocation API Basics ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
