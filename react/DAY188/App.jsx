import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted for the first time!');
  }, []); // Runs once

  useEffect(() => {
    console.log('Count updated to:', count);
  }, [count]); // Runs when count changes

  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
}
