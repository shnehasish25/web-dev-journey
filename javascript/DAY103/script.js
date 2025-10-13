// Day 103: Error Handling with try...catch
// Topic: Catching async errors cleanly.

console.log("Day 103 script initialized: Error Handling with try...catch");

// Core code demonstration
async function run(){ try { const d = await loadData(); } catch(err) { console.error('Fetch error:', err); } }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 103 Demo Executed:</strong><br>Error Handling with try...catch ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
