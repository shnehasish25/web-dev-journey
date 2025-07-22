// Day 46: Loops: for...of & for...in
// Topic: Iterating arrays with for...of and object keys with for...in.

console.log("Day 46 script initialized: Loops: for...of & for...in");

// Core code demonstration
const metroStops = ['Majestic', 'MG Road', 'Indiranagar']; for(const stop of metroStops){ console.log(stop); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 46 Demo Executed:</strong><br>Loops: for...of & for...in ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
