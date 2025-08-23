// Day 71: Creating Nodes: createElement & append
// Topic: Generating dynamic HTML nodes on the fly.

console.log("Day 71 script initialized: Creating Nodes: createElement & append");

// Core code demonstration
const li = document.createElement('li'); li.textContent = 'New Task'; document.body.appendChild(li);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 71 Demo Executed:</strong><br>Creating Nodes: createElement & append ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
