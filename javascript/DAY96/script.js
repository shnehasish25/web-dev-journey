// Day 96: Synchronous vs Asynchronous JS
// Topic: The single-threaded Call Stack.

console.log("Day 96 script initialized: Synchronous vs Asynchronous JS");

// Core code demonstration
console.log('1'); setTimeout(() => console.log('2'), 0); console.log('3'); // Prints 1, 3, 2!

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 96 Demo Executed:</strong><br>Synchronous vs Asynchronous JS ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
