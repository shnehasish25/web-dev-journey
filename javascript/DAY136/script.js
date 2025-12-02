// Day 136: Shallow Copy vs Deep Copy
// Topic: structuredClone and reference mutations.

console.log("Day 136 script initialized: Shallow Copy vs Deep Copy");

// Core code demonstration
const orig = { a: 1, nested: { b: 2 } }; const deep = structuredClone(orig);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 136 Demo Executed:</strong><br>Shallow Copy vs Deep Copy ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
