// Day 65: Mini-Project: Swiggy Multi-Filter Engine
// Topic: map, filter, reduce applied to food catalogue.

console.log("Day 65 script initialized: Mini-Project: Swiggy Multi-Filter Engine");

// Core code demonstration
const catalog = [{name:'Paneer Tikka', price:240, veg:true, rating:4.5}];

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 65 Demo Executed:</strong><br>Mini-Project: Swiggy Multi-Filter Engine ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
