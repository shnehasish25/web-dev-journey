// Day 143: Canvas Animations: requestAnimationFrame
// Topic: 60 FPS rendering loop.

console.log("Day 143 script initialized: Canvas Animations: requestAnimationFrame");

// Core code demonstration
function animate(){ update(); draw(); requestAnimationFrame(animate); } requestAnimationFrame(animate);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 143 Demo Executed:</strong><br>Canvas Animations: requestAnimationFrame ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
