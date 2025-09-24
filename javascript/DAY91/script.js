// Day 91: Intersection Observer API
// Topic: Detecting when elements scroll into view.

console.log("Day 91 script initialized: Intersection Observer API");

// Core code demonstration
const obs = new IntersectionObserver((entries) => { entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('show'); }); });

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 91 Demo Executed:</strong><br>Intersection Observer API ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
