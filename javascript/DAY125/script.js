// Day 125: Explicit Binding: call, apply, bind
// Topic: Manually setting the 'this' context.

console.log("Day 125 script initialized: Explicit Binding: call, apply, bind");

// Core code demonstration
function greet(greeting){ return `${greeting}, ${this.name}`; } greet.call({name:'Kushal'}, 'Namaste');

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 125 Demo Executed:</strong><br>Explicit Binding: call, apply, bind ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
