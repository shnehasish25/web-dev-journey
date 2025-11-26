// Day 132: Closure Applications: Memoization
// Topic: Caching expensive function results.

console.log("Day 132 script initialized: Closure Applications: Memoization");

// Core code demonstration
function memoize(fn){ const cache = {}; return function(n){ if(n in cache) return cache[n]; return cache[n] = fn(n); }; }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 132 Demo Executed:</strong><br>Closure Applications: Memoization ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
