// Day 70: Manipulating Styles & classList
// Topic: classList.add, remove, toggle, contains.

console.log("Day 70 script initialized: Manipulating Styles & classList");

// Core code demonstration
const box = document.querySelector('.box'); box.classList.toggle('active');

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 70 Demo Executed:</strong><br>Manipulating Styles & classList ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
