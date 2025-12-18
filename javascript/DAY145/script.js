// Day 145: Mini-Project: Drag-and-Drop Kanban Board
// Topic: To-Do, In-Progress, Done task columns.

console.log("Day 145 script initialized: Mini-Project: Drag-and-Drop Kanban Board");

// Core code demonstration
function drop(e){ e.preventDefault(); const id = e.dataTransfer.getData('id'); e.target.appendChild(document.getElementById(id)); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 145 Demo Executed:</strong><br>Mini-Project: Drag-and-Drop Kanban Board ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
