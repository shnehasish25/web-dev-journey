import React, { useState, useEffect } from 'react';

export default function App() {
  const [id, setId] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    let isCurrent = true;

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(r => r.json())
      .then(result => {
        if (isCurrent) setData(result);
      });

    return () => { isCurrent = false; };
  }, [id]);

  return (
    <div>
      <button onClick={() => setId(id === 1 ? 2 : 1)}>Toggle Todo ID</button>
      <p>Todo: {data?.title}</p>
    </div>
  );
}
