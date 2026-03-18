import React, { useState, useEffect } from 'react';

function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

export default function App() {
  const [input, setInput] = useState('');
  const debouncedQuery = useDebounce(input, 500);

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type fast..." />
      <p>Debounced API Query: {debouncedQuery}</p>
    </div>
  );
}
