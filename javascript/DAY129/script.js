// Day 129: Modern Collections: Set & Map
// Topic: Unique value collections and key-value maps.

console.log("Day 129 script initialized: Modern Collections: Set & Map");

// Core code demonstration
const uniqueTags = new Set(['html', 'css', 'html', 'js']); console.log([...uniqueTags]);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 129 Demo Executed:</strong><br>Modern Collections: Set & Map ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
