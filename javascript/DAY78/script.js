// Day 78: Input & Change Events
// Topic: Real-time live typing vs commit change.

console.log("Day 78 script initialized: Input & Change Events");

// Core code demonstration
const search = document.querySelector('input'); search.addEventListener('input', (e) => console.log(e.target.value));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 78 Demo Executed:</strong><br>Input & Change Events ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
