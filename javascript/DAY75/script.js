// Day 75: Event Bubbling & Event Delegation
// Topic: Events bubbling up the DOM tree.

console.log("Day 75 script initialized: Event Bubbling & Event Delegation");

// Core code demonstration
document.querySelector('ul').addEventListener('click', (e) => { if(e.target.tagName === 'LI') e.target.remove(); });

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 75 Demo Executed:</strong><br>Event Bubbling & Event Delegation ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
