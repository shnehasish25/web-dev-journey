// Day 73: Event Listeners: addEventListener
// Topic: Registering click, input, and focus events.

console.log("Day 73 script initialized: Event Listeners: addEventListener");

// Core code demonstration
const btn = document.querySelector('button'); btn.addEventListener('click', () => alert('Clicked!'));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 73 Demo Executed:</strong><br>Event Listeners: addEventListener ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
