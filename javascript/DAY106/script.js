// Day 106: Fetch API: GET Requests
// Topic: Fetching data from public endpoints.

console.log("Day 106 script initialized: Fetch API: GET Requests");

// Core code demonstration
fetch('https://jsonplaceholder.typicode.com/posts/1').then(r => r.json()).then(d => console.log(d));

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 106 Demo Executed:</strong><br>Fetch API: GET Requests ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
