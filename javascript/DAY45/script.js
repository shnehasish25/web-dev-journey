// Day 45: Loops: for & while
// Topic: Standard counting loop, while loops, infinite loop traps.

console.log("Day 45 script initialized: Loops: for & while");

// Core code demonstration
let sum = 0; for(let i = 1; i <= 10; i++) { sum += i; } console.log('Sum 1-10:', sum);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 45 Demo Executed:</strong><br>Loops: for & while ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
