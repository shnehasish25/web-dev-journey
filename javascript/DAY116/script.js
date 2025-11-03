// Day 116: Constructor Functions & new Keyword
// Topic: Object creation before ES6 classes.

console.log("Day 116 script initialized: Constructor Functions & new Keyword");

// Core code demonstration
function User(name){ this.name = name; } const u = new User('Kushal'); console.log(u.name);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 116 Demo Executed:</strong><br>Constructor Functions & new Keyword ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
