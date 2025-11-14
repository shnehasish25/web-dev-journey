// Day 124: The 'this' Keyword Masterclass
// Topic: Default binding, implicit binding, arrow functions.

console.log("Day 124 script initialized: The 'this' Keyword Masterclass");

// Core code demonstration
const obj = { name: 'Kushal', show(){ console.log(this.name); } }; obj.show();

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 124 Demo Executed:</strong><br>The 'this' Keyword Masterclass ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
