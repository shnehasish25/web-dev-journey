// Day 154: Project 4: Typing Mistake Highlighting (Part 2)
// Topic: Real-time character comparison (green/red feedback).

console.log("Day 154 script initialized: Project 4: Typing Mistake Highlighting (Part 2)");

// Core code demonstration
function checkChar(typed, target){ return typed === target ? 'correct' : 'incorrect'; }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 154 Demo Executed:</strong><br>Project 4: Typing Mistake Highlighting (Part 2) ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
