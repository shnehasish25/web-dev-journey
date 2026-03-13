import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export default function App() {
  const [items, dispatch] = useReducer((state, action) => {
    return action.type === 'ADD' ? [...state, action.item] : state;
  }, []);

  return (
    <CartContext.Provider value={{ items, dispatch }}>
      <h3>Global Cart: {items.length} items</h3>
    </CartContext.Provider>
  );
}
