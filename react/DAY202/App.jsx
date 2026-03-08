import React, { useReducer } from 'react';

const initialState = { balance: 5000, expenses: [] };

function budgetReducer(state, action) {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        balance: state.balance - action.payload.amount,
        expenses: [action.payload, ...state.expenses]
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
    <div className="budget-box">
      <h2>Hostel Balance: ₹{state.balance}</h2>
      <button onClick={() => dispatch({ type: 'ADD_EXPENSE', payload: { title: 'Mess Dues', amount: 800 } })}>
        Pay Mess ₹800
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset Month</button>
    </div>
  );
}
