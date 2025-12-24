// Day 151: Project 3: Markdown Notes App (Part 1)
// Topic: Live preview editor, auto-saving to localStorage.

console.log("Day 151 script initialized: Project 3: Markdown Notes App (Part 1)");

// Core code demonstration
textarea.addEventListener('input', () => { localStorage.setItem('savedNote', textarea.value); renderPreview(); });

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 151 Demo Executed:</strong><br>Project 3: Markdown Notes App (Part 1) ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
