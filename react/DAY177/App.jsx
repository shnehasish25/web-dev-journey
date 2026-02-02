import React from 'react';

export default function App() {
  const metroStations = [
    { id: 'sb-1', name: 'Majestic (Nadaprabhu Kempegowda)', line: 'Green & Purple' },
    { id: 'sb-2', name: 'MG Road', line: 'Purple' },
    { id: 'sb-3', name: 'Indiranagar', line: 'Purple' }
  ];

  return (
    <ul className="station-list">
      {metroStations.map(station => (
        <li key={station.id}>
          <strong>{station.name}</strong> &mdash; <span>{station.line}</span>
        </li>
      ))}
    </ul>
  );
}
