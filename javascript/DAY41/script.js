// Day 41: Operators & Math Methods
// Topic: Modulus, exponentiation, Math.floor, Math.random.

console.log("Day 41 script initialized: Operators & Math Methods");

// Core code demonstration
const bill = 3600; const perHead = bill / 4; const otp = Math.floor(1000 + Math.random() * 9000);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 41 Demo Executed:</strong><br>Operators & Math Methods ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
