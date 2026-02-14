import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times | React App`;
  });

  return (
    <div>
      <h3>Document Title Updater</h3>
      <button onClick={() => setCount(prev => prev + 1)}>Increment ({count})</button>
    </div>
  );
}
