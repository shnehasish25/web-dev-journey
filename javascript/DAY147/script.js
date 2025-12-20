// Day 147: Project 1: Indian Tech Quiz (Part 1)
// Topic: Question bank, timer, dynamic choice rendering.

console.log("Day 147 script initialized: Project 1: Indian Tech Quiz (Part 1)");

// Core code demonstration
const questions = [{ q: 'Which city is known as Silicon Valley of India?', options:['Mumbai','Bengaluru','Delhi'], ans: 1 }];

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 147 Demo Executed:</strong><br>Project 1: Indian Tech Quiz (Part 1) ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
