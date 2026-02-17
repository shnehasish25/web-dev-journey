import React, { useState, useEffect } from 'react';

export default function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(timer);
  }, []);

  return <h3>Timer Active: {seconds}s</h3>;
}
