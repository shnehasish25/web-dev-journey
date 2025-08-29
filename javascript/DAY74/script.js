// Day 74: The Event Object: target & currentTarget
// Topic: Reading user event details.

console.log("Day 74 script initialized: The Event Object: target & currentTarget");

// Core code demonstration
document.addEventListener('click', (e) => console.log('Clicked element:', e.target));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 74 Demo Executed:</strong><br>The Event Object: target & currentTarget ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
