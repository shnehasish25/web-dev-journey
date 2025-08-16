// Day 66: The DOM Tree & document Object
// Topic: Document Object Model architecture.

console.log("Day 66 script initialized: The DOM Tree & document Object");

// Core code demonstration
console.log(document.title, document.URL);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 66 Demo Executed:</strong><br>The DOM Tree & document Object ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
