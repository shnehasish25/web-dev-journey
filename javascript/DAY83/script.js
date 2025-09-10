// Day 83: Web Storage: localStorage Basics
// Topic: Persisting key-value data across page reloads.

console.log("Day 83 script initialized: Web Storage: localStorage Basics");

// Core code demonstration
localStorage.setItem('theme', 'dark'); console.log(localStorage.getItem('theme'));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 83 Demo Executed:</strong><br>Web Storage: localStorage Basics ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
