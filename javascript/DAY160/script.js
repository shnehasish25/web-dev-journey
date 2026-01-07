// Day 160: Capstone Part 3: Mock UPI QR Code Checkout & Graduation! 🎉
// Topic: Complete checkout modal with QR code, order confirmation animation.

console.log("Day 160 script initialized: Capstone Part 3: Mock UPI QR Code Checkout & Graduation! 🎉");

// Core code demonstration
function checkout(){ showUpiModal(totalAmount); } console.log('🎉 160-DAY WEB DEV JOURNEY COMPLETED!');

// Interactive button demo
const outputBox = document.getElementById("demo-output");
const actionBtn = document.getElementById("action-btn");

if (actionBtn && outputBox) {
  actionBtn.addEventListener("click", () => {
    outputBox.innerHTML = `<strong>Day 160 Demo Executed:</strong><br>Capstone Part 3: Mock UPI QR Code Checkout & Graduation! 🎉 ran successfully at ${new Date().toLocaleTimeString()}!`;
    outputBox.style.borderColor = "#22c55e";
  });
}
