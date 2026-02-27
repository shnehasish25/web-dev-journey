import React, { useState, useMemo } from 'react';

function expensiveComputation(n) {
  let res = 0;
  for (let i = 0; i < 1000000; i++) res += n;
  return res;
}

export default function App() {
  const [num, setNum] = useState(5);
  const [dark, setDark] = useState(false);

  const calculated = useMemo(() => expensiveComputation(num), [num]);

  return (
    <div style={{ background: dark ? '#333' : '#fff', color: dark ? '#fff' : '#000', padding: 20 }}>
      <p>Result: {calculated}</p>
      <button onClick={() => setNum(num + 1)}>Increment Num</button>
      <button onClick={() => setDark(!dark)}>Toggle Dark Mode</button>
    </div>
  );
}
