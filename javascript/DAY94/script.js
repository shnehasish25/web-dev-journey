// Day 94: UI Component: Collapsible Accordion
// Topic: Single and multi-open accordion panels.

console.log("Day 94 script initialized: UI Component: Collapsible Accordion");

// Core code demonstration
document.querySelectorAll('.acc-head').forEach(h => h.addEventListener('click', () => h.nextElementSibling.classList.toggle('open')));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 94 Demo Executed:</strong><br>UI Component: Collapsible Accordion ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
