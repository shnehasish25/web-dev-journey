// Day 142: Canvas API: 2D Drawing Basics
// Topic: HTML5 canvas element and 2D context.

console.log("Day 142 script initialized: Canvas API: 2D Drawing Basics");

// Core code demonstration
const ctx = canvas.getContext('2d'); ctx.fillStyle = '#2563eb'; ctx.fillRect(10, 10, 100, 50);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 142 Demo Executed:</strong><br>Canvas API: 2D Drawing Basics ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
