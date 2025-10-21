// Day 107: Fetch API: POST Requests & Headers
// Topic: Sending JSON payloads to server.

console.log("Day 107 script initialized: Fetch API: POST Requests & Headers");

// Core code demonstration
fetch('/api/order', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({id:1}) });

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 107 Demo Executed:</strong><br>Fetch API: POST Requests & Headers ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
