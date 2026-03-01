import React, { useState, useCallback } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <button onClick={increment}>Count: {count}</button>;
}
