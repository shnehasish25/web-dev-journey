// Day 140: HTML5 Drag and Drop API
// Topic: dragstart, dragover, drop events.

console.log("Day 140 script initialized: HTML5 Drag and Drop API");

// Core code demonstration
card.addEventListener('dragstart', (e) => e.dataTransfer.setData('id', e.target.id));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 140 Demo Executed:</strong><br>HTML5 Drag and Drop API ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
