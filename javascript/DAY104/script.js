// Day 104: The Event Loop & Microtask Queue
// Topic: Macrotasks vs Microtasks execution order.

console.log("Day 104 script initialized: The Event Loop & Microtask Queue");

// Core code demonstration
Promise.resolve().then(() => console.log('Microtask')); setTimeout(() => console.log('Macrotask'), 0);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 104 Demo Executed:</strong><br>The Event Loop & Microtask Queue ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
