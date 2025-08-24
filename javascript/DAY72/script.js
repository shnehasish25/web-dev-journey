// Day 72: Removing & Replacing DOM Nodes
// Topic: element.remove() and parent.removeChild().

console.log("Day 72 script initialized: Removing & Replacing DOM Nodes");

// Core code demonstration
const target = document.querySelector('.old-item'); target?.remove();

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 72 Demo Executed:</strong><br>Removing & Replacing DOM Nodes ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
