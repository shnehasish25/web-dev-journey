// Day 39: JS Setup & Console Output
// Topic: Console utilities, V8 engine basics, script linking.

console.log("Day 39 script initialized: JS Setup & Console Output");

// Core code demonstration
console.log('Script loaded'); const user = { city: 'Bengaluru', sem: 4 }; console.table(user);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 39 Demo Executed:</strong><br>JS Setup & Console Output ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
