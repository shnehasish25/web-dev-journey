// Day 133: Currying & Partial Application
// Topic: Converting f(a,b,c) into f(a)(b)(c).

console.log("Day 133 script initialized: Currying & Partial Application");

// Core code demonstration
const multiply = a => b => a * b; const double = multiply(2); console.log(double(5));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 133 Demo Executed:</strong><br>Currying & Partial Application ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
