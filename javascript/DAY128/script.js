// Day 128: ES6 Modules: import & export
// Topic: Modularizing codebase across multiple files.

console.log("Day 128 script initialized: ES6 Modules: import & export");

// Core code demonstration
// export const sum = (a, b) => a + b; import { sum } from './math.js';

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 128 Demo Executed:</strong><br>ES6 Modules: import & export ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
