import React, { useState } from 'react';

export default function App() {
  const [query, setQuery] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search Bengaluru cafes..." 
      />
      <p>Live Query: {query}</p>
    </div>
  );
}
