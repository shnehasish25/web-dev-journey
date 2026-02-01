import React from 'react';

export default function App() {
  const isLoggedIn = true;
  const cartItemsCount = 3;

  return (
    <div className="card">
      <h2>{isLoggedIn ? 'Welcome back, Kushal!' : 'Please log in.'}</h2>
      {cartItemsCount > 0 && <p>You have {cartItemsCount} items in your Swiggy cart.</p>}
    </div>
  );
}
