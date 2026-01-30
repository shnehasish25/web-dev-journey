import React from 'react';

function DishCard({ name, price, isVeg }) {
  return (
    <div className="dish-card">
      <h3>{isVeg ? '🟢' : '🔴'} {name}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="menu">
      <DishCard name="Ghee Masala Dosa" price={120} isVeg={true} />
      <DishCard name="Chicken Biryani" price={280} isVeg={false} />
    </div>
  );
}
