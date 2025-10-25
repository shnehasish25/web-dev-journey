// Day 109: URL Query Parameters & Search Params
// Topic: Building dynamic request URLs.

console.log("Day 109 script initialized: URL Query Parameters & Search Params");

// Core code demonstration
const params = new URLSearchParams({ city: 'Bengaluru', limit: 10 }); console.log(params.toString());

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 109 Demo Executed:</strong><br>URL Query Parameters & Search Params ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
