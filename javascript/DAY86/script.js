// Day 86: Custom Modal Dialogs vs Native Alerts
// Topic: Building accessible overlay popups.

console.log("Day 86 script initialized: Custom Modal Dialogs vs Native Alerts");

// Core code demonstration
function openModal(id){ document.querySelector(id).classList.add('open'); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 86 Demo Executed:</strong><br>Custom Modal Dialogs vs Native Alerts ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
