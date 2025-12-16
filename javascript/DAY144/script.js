// Day 144: Unit Testing Concepts: Assertions
// Topic: Writing test helpers without external libraries.

console.log("Day 144 script initialized: Unit Testing Concepts: Assertions");

// Core code demonstration
function expect(actual){ return { toBe(expected){ if(actual === expected) console.log('PASS'); else console.error('FAIL'); } }; }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 144 Demo Executed:</strong><br>Unit Testing Concepts: Assertions ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
