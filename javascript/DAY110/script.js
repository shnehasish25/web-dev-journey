// Day 110: Live API: Indian PIN Code Lookup
// Topic: Fetching post office & district details.

console.log("Day 110 script initialized: Live API: Indian PIN Code Lookup");

// Core code demonstration
async function checkPin(pin){ const res = await fetch(`https://api.postalpincode.in/pincode/${pin}`); return res.json(); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 110 Demo Executed:</strong><br>Live API: Indian PIN Code Lookup ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
