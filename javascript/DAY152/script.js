// Day 152: Project 3: Notes Tags & Search (Part 2)
// Topic: Tag filtering, pinned notes, and keyword search.

console.log("Day 152 script initialized: Project 3: Notes Tags & Search (Part 2)");

// Core code demonstration
function filterNotes(query){ return allNotes.filter(n => n.title.includes(query) || n.tags.includes(query)); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 152 Demo Executed:</strong><br>Project 3: Notes Tags & Search (Part 2) ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
