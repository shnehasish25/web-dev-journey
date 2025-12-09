// Day 141: Web Workers: Multi-threading
// Topic: Running heavy calculations off main UI thread.

console.log("Day 141 script initialized: Web Workers: Multi-threading");

// Core code demonstration
const worker = new Worker('worker.js'); worker.postMessage('start'); worker.onmessage = (e) => console.log(e.data);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 141 Demo Executed:</strong><br>Web Workers: Multi-threading ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
