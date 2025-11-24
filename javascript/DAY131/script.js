// Day 131: Closures in Depth
// Topic: Functions remembering their outer lexical scope.

console.log("Day 131 script initialized: Closures in Depth");

// Core code demonstration
function outer(){ let c = 0; return function(){ c++; return c; }; } const counter = outer();

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 131 Demo Executed:</strong><br>Closures in Depth ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
