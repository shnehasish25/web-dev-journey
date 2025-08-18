// Day 68: Modifying Content: textContent vs innerHTML
// Topic: Updating node text and HTML safely.

console.log("Day 68 script initialized: Modifying Content: textContent vs innerHTML");

// Core code demonstration
const title = document.querySelector('h1'); title.textContent = 'Updated Title';

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 68 Demo Executed:</strong><br>Modifying Content: textContent vs innerHTML ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
