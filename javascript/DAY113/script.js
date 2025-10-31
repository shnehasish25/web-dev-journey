// Day 113: Loading Spinners & Skeleton Screens
// Topic: User feedback during async operations.

console.log("Day 113 script initialized: Loading Spinners & Skeleton Screens");

// Core code demonstration
showLoader(); try { await fetch(url); } finally { hideLoader(); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 113 Demo Executed:</strong><br>Loading Spinners & Skeleton Screens ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
