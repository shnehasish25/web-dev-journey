// Day 159: Capstone Part 2: Discounts, 5% GST & Coupons
// Topic: Promo code validation ('FIRST50' = 50% off up to ₹100).

console.log("Day 159 script initialized: Capstone Part 2: Discounts, 5% GST & Coupons");

// Core code demonstration
function applyCoupon(code, subtotal){ if(code === 'FIRST50') return Math.min(subtotal * 0.5, 100); return 0; }

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 159 Demo Executed:</strong><br>Capstone Part 2: Discounts, 5% GST & Coupons ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
