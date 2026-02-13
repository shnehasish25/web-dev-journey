import React, { useState } from 'react';

export default function App() {
  const [balance, setBalance] = useState(250);
  const [trips, setTrips] = useState([]);

  const travel = (station, fare) => {
    if (balance < fare) {
      alert('Insufficient balance! Please top up.');
      return;
    }
    setBalance(prev => prev - fare);
    setTrips(prev => [{ station, fare, time: new Date().toLocaleTimeString() }, ...prev]);
  };

  return (
    <div className="metro-app">
      <h2>Namma Metro Card Balance: ₹{balance}</h2>
      <button onClick={() => setBalance(prev => prev + 100)}>+ Top Up ₹100</button>
      <div className="trip-buttons">
        <button onClick={() => travel('Majestic to MG Road', 20)}>Trip to MG Road (₹20)</button>
        <button onClick={() => travel('Majestic to Whitefield', 50)}>Trip to Whitefield (₹50)</button>
      </div>
      <h3>Recent Trips:</h3>
      <ul>
        {trips.map((t, idx) => (
          <li key={idx}>{t.station} - ₹{t.fare} at {t.time}</li>
        ))}
      </ul>
    </div>
  );
}
