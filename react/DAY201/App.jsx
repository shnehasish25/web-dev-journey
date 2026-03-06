import React, { useReducer } from 'react';

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <div>
      <h3>Items in cart: {cart.length}</h3>
      <button onClick={() => dispatch({ type: 'ADD', payload: { id: Date.now(), name: 'Filter Coffee', price: 30 } })}>
        + Add Coffee
      </button>
    </div>
  );
}
