import React, { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [val, setVal] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [key, val]);

  return [val, setVal];
}

export default function App() {
  const [name, setName] = useLocalStorage('studentName', 'Kushal');
  return <input value={name} onChange={e => setName(e.target.value)} />;
}
