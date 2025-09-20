// Day 88: Smooth Scrolling & Floating Button
// Topic: window.scrollTo and behavior: smooth.

console.log("Day 88 script initialized: Smooth Scrolling & Floating Button");

// Core code demonstration
window.scrollTo({ top: 0, behavior: 'smooth' });

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 88 Demo Executed:</strong><br>Smooth Scrolling & Floating Button ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
