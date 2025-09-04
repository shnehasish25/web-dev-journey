// Day 79: Form Submission & preventDefault
// Topic: Intercepting browser form submits.

console.log("Day 79 script initialized: Form Submission & preventDefault");

// Core code demonstration
document.querySelector('form').addEventListener('submit', (e) => { e.preventDefault(); console.log('Handled with JS'); });

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 79 Demo Executed:</strong><br>Form Submission & preventDefault ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
