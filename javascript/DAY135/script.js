// Day 135: Performance: Throttling
// Topic: Guaranteeing execution at regular time intervals.

console.log("Day 135 script initialized: Performance: Throttling");

// Core code demonstration
function throttle(fn, limit){ let inThrottle; return (...args) => { if(!inThrottle){ fn(...args); inThrottle = true; setTimeout(()=>inThrottle=false, limit); } }; }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 135 Demo Executed:</strong><br>Performance: Throttling ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
