// Day 53: Array Methods: slice, splice, concat, join
// Topic: Copying, modifying in place, and joining strings.

console.log("Day 53 script initialized: Array Methods: slice, splice, concat, join");

// Core code demonstration
const items = ['a', 'b', 'c', 'd']; const sub = items.slice(1, 3); console.log(sub);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 53 Demo Executed:</strong><br>Array Methods: slice, splice, concat, join ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
