import React from 'react';

export default function App() {
  function handleOrder(dishName) {
    alert(`Order received for ${dishName}! Delivery in 25 mins.`);
  }

  return (
    <div>
      <button onClick={() => handleOrder('Masala Dosa')}>Order Dosa</button>
    </div>
  );
}
