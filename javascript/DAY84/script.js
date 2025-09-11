// Day 84: Web Storage: Storing Objects & JSON
// Topic: JSON.stringify and JSON.parse.

console.log("Day 84 script initialized: Web Storage: Storing Objects & JSON");

// Core code demonstration
const profile = { name: 'Kushal' }; localStorage.setItem('user', JSON.stringify(profile));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 84 Demo Executed:</strong><br>Web Storage: Storing Objects & JSON ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
