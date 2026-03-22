import React, { useState } from 'react';

export default function App() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="app-shell">
      <header><h2>React Food Express</h2></header>
      <div className="filter-chips">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('veg')}>🟢 Pure Veg</button>
      </div>
    </div>
  );
}
