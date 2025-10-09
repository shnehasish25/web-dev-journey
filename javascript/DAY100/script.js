// Day 100: Promise Chaining
// Topic: Sequential asynchronous steps.

console.log("Day 100 script initialized: Promise Chaining");

// Core code demonstration
login().then(user => fetchProfile(user.id)).then(profile => console.log(profile));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 100 Demo Executed:</strong><br>Promise Chaining ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
