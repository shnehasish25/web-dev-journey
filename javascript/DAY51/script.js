// Day 51: Array Basics & Indexing
// Topic: Zero-indexed lists, length property, array literals.

console.log("Day 51 script initialized: Array Basics & Indexing");

// Core code demonstration
const list = ['Chai', 'Samosa', 'Vada']; console.log(list[0], list.length);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 51 Demo Executed:</strong><br>Array Basics & Indexing ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
