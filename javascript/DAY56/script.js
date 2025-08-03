// Day 56: Array Filtering: filter()
// Topic: Selecting a subset of elements passing a condition.

console.log("Day 56 script initialized: Array Filtering: filter()");

// Core code demonstration
const dishes = [{name:'Dosa', veg:true}, {name:'Biryani', veg:false}]; const veg = dishes.filter(d => d.veg);

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 56 Demo Executed:</strong><br>Array Filtering: filter() ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
