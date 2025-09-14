// Day 85: SessionStorage & Storage Events
// Topic: Tab-specific temporary storage.

console.log("Day 85 script initialized: SessionStorage & Storage Events");

// Core code demonstration
sessionStorage.setItem('tempToken', 'xyz123');

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 85 Demo Executed:</strong><br>SessionStorage & Storage Events ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
