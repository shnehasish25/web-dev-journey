// Day 52: Array Mutation: push, pop, shift, unshift
// Topic: Adding and removing elements at start and end.

console.log("Day 52 script initialized: Array Mutation: push, pop, shift, unshift");

// Core code demonstration
const cart = ['Idli']; cart.push('Dosa'); cart.unshift('Coffee'); console.log(cart);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 52 Demo Executed:</strong><br>Array Mutation: push, pop, shift, unshift ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
