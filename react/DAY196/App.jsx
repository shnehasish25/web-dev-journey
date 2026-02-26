import React, { useState, useRef } from 'react';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const timerId = useRef(null);

  const start = () => {
    if (timerId.current !== null) return;
    timerId.current = setInterval(() => setSeconds(s => s + 1), 1000);
  };

  const stop = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };

  return (
    <div>
      <h3>Timer: {seconds}s</h3>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Pause</button>
    </div>
  );
}
