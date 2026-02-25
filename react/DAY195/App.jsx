import React, { useRef, useEffect } from 'react';

export default function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus(); // Auto-focus input on page load!
  }, []);

  return (
    <div>
      <input ref={inputRef} placeholder="Search dishes (auto-focused)..." />
    </div>
  );
}
