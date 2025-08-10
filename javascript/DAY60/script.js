// Day 60: Object Methods & 'this' Keyword
// Topic: Adding functions to objects, contextual 'this'.

console.log("Day 60 script initialized: Object Methods & 'this' Keyword");

// Core code demonstration
const student = { name: 'Kushal', sem: 4, getDetails(){ return `${this.name} - Sem ${this.sem}`; } };

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 60 Demo Executed:</strong><br>Object Methods & 'this' Keyword ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
