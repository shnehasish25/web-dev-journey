// Day 99: Consuming Promises: then, catch, finally
// Topic: Handling promise outcomes.

console.log("Day 99 script initialized: Consuming Promises: then, catch, finally");

// Core code demonstration
order.then(res => console.log(res)).catch(err => console.error(err)).finally(() => console.log('Done'));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 99 Demo Executed:</strong><br>Consuming Promises: then, catch, finally ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
