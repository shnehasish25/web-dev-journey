// Day 126: Factory Functions vs Classes
// Topic: Creating objects without 'new' or 'this'.

console.log("Day 126 script initialized: Factory Functions vs Classes");

// Core code demonstration
function createCounter(){ let count = 0; return { inc(){ count++; return count; } }; }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 126 Demo Executed:</strong><br>Factory Functions vs Classes ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
