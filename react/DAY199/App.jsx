import React, { useState, memo } from 'react';

const Header = memo(function Header({ title }) {
  console.log('Header rendered!');
  return <h2>{title}</h2>;
});

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header title="Static Header (Memoized)" />
      <button onClick={() => setCount(c => c + 1)}>Counter: {count}</button>
    </div>
  );
}
