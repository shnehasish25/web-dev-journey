// Day 76: Keyboard Events: keydown & keyup
// Topic: Listening to keyboard shortcuts and inputs.

console.log("Day 76 script initialized: Keyboard Events: keydown & keyup");

// Core code demonstration
window.addEventListener('keydown', (e) => { if(e.key === 'Escape') console.log('Esc pressed'); });

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 76 Demo Executed:</strong><br>Keyboard Events: keydown & keyup ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
