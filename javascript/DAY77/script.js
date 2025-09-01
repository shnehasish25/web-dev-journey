// Day 77: Mouse Events & Hover States
// Topic: mouseenter, mouseleave, mousemove.

console.log("Day 77 script initialized: Mouse Events & Hover States");

// Core code demonstration
const card = document.querySelector('.card'); card.addEventListener('mouseenter', () => card.classList.add('hovered'));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 77 Demo Executed:</strong><br>Mouse Events & Hover States ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
