// Day 50: Mini-Project: Attendance & Mess Splitter
// Topic: Combining logic, conditionals, math, and strings.

console.log("Day 50 script initialized: Mini-Project: Attendance & Mess Splitter");

// Core code demonstration
function checkAttendance(att, total){ const pct = (att/total)*100; return pct >= 75 ? 'OK' : 'Shortage'; }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 50 Demo Executed:</strong><br>Mini-Project: Attendance & Mess Splitter ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
