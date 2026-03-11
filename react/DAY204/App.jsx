import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Current Theme: {theme}</button>;
}

export default function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
