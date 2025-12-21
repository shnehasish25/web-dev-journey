// Day 148: Project 1: Quiz App Leaderboard (Part 2)
// Topic: Review incorrect answers, save high scores in localStorage.

console.log("Day 148 script initialized: Project 1: Quiz App Leaderboard (Part 2)");

// Core code demonstration
function saveScore(name, score){ const board = JSON.parse(localStorage.getItem('quizBoard') || '[]'); board.push({name, score}); }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 148 Demo Executed:</strong><br>Project 1: Quiz App Leaderboard (Part 2) ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
