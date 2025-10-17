// Day 105: Introduction to HTTP & REST APIs
// Topic: HTTP verbs, status codes (200, 404, 500), JSON payloads.

console.log("Day 105 script initialized: Introduction to HTTP & REST APIs");

// Core code demonstration
// GET https://api.example.com/items

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 105 Demo Executed:</strong><br>Introduction to HTTP & REST APIs ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
