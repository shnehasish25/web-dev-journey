import React, { useState, useEffect } from 'react';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('appTheme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('appTheme', theme);
  }, [theme]);

  return (
    <div className={`app-box ${theme}`}>
      <p>Active Theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
    </div>
  );
}
