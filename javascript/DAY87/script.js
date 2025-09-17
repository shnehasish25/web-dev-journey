// Day 87: Window & Viewport Dimensions
// Topic: innerWidth, innerHeight, scrollX, scrollY.

console.log("Day 87 script initialized: Window & Viewport Dimensions");

// Core code demonstration
console.log('Viewport size:', window.innerWidth, window.innerHeight);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 87 Demo Executed:</strong><br>Window & Viewport Dimensions ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
