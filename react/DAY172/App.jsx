import React from 'react';

export default function App() {
  const developer = 'Kushal';
  const city = 'Bengaluru';
  const currentYear = new Date().getFullYear();

  return (
    <div className="card">
      <h2>Developer: {developer}</h2>
      <p>Location: {city} | Year: {currentYear}</p>
      <p>Math in JSX: 2 + 2 = {2 + 2}</p>
    </div>
  );
}
