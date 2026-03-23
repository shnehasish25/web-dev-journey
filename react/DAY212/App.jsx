import React, { useState } from 'react';

const MENU = [
  { id: 1, name: 'Ghee Podi Masala Dosa', price: 140, veg: true },
  { id: 2, name: 'Meghana Chicken Biryani', price: 290, veg: false },
  { id: 3, name: 'Thatte Idli with Butter', price: 70, veg: true },
  { id: 4, name: 'Filter Coffee (Degree)', price: 35, veg: true }
];

export default function App() {
  const [cart, setCart] = useState({});
  const [vegOnly, setVegOnly] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const addItem = (id) => setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  const subtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = MENU.find(m => m.id === parseInt(id));
    return sum + (item.price * qty);
  }, 0);
  const grandTotal = subtotal > 0 ? subtotal + (subtotal * 0.05) + 30 : 0;

  const displayedDishes = vegOnly ? MENU.filter(d => d.veg) : MENU;

  return (
    <div className="capstone-app">
      <header className="header">
        <h1>Swiggy Express (React Capstone)</h1>
        <button className="cart-badge" onClick={() => setShowQr(true)}>
          🛒 Cart: ₹{grandTotal.toFixed(0)}
        </button>
      </header>

      <div className="controls">
        <label>
          <input type="checkbox" checked={vegOnly} onChange={e => setVegOnly(e.target.checked)} />
          🟢 Pure Veg Only
        </label>
      </div>

      <div className="menu-grid">
        {displayedDishes.map(d => (
          <div key={d.id} className="dish-card">
            <h3>{d.veg ? '🟢' : '🔴'} {d.name}</h3>
            <p>₹{d.price}</p>
            <button onClick={() => addItem(d.id)}>ADD +</button>
          </div>
        ))}
      </div>

      {showQr && (
        <div className="modal-overlay" onClick={() => setShowQr(false)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <h3>Scan &amp; Pay via UPI</h3>
            <p>Grand Total: ₹{grandTotal.toFixed(0)} (Incl. 5% GST)</p>
            <div className="qr-placeholder">[ UPI QR CODE (PhonePe / GPay) ]</div>
            <p><small>UPI ID: kushal@upi</small></p>
            <button onClick={() => { alert('Payment Successful! Order Placed!'); setShowQr(false); setCart({}); }}>
              Simulate Payment Success
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
