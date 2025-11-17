// Day 127: Module Pattern & Encapsulation
// Topic: Using IIFE to hide implementation details.

console.log("Day 127 script initialized: Module Pattern & Encapsulation");

// Core code demonstration
const CartModule = (() => { const items = []; return { add(item){ items.push(item); } }; })();

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 127 Demo Executed:</strong><br>Module Pattern & Encapsulation ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
