// Day 93: UI Component: Tab Switcher
// Topic: Clickable tab navigation showing active panel.

console.log("Day 93 script initialized: UI Component: Tab Switcher");

// Core code demonstration
function switchTab(idx){ tabs.forEach(t => t.classList.remove('active')); tabs[idx].classList.add('active'); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 93 Demo Executed:</strong><br>UI Component: Tab Switcher ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
