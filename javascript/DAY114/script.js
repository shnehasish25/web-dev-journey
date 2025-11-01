// Day 114: AbortController: Canceling Requests
// Topic: Aborting stale fetch calls on new search input.

console.log("Day 114 script initialized: AbortController: Canceling Requests");

// Core code demonstration
const controller = new AbortController(); fetch(url, { signal: controller.signal }); controller.abort();

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 114 Demo Executed:</strong><br>AbortController: Canceling Requests ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
