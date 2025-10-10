// Day 101: Promise Combinators: all, race, allSettled
// Topic: Running parallel async tasks.

console.log("Day 101 script initialized: Promise Combinators: all, race, allSettled");

// Core code demonstration
Promise.all([fetch('/users'), fetch('/posts')]).then(([users, posts]) => console.log('Both loaded'));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 101 Demo Executed:</strong><br>Promise Combinators: all, race, allSettled ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
