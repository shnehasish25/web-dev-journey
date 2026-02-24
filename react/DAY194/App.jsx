import React, { useState, useEffect } from 'react';

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&current_weather=true');
      const data = await res.json();
      setWeather(data.current_weather);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="weather-card">
      <h2>Bengaluru Weather Live</h2>
      {loading ? <p>Fetching satellite data...</p> : (
        <div>
          <p className="temp">{weather?.temperature}°C</p>
          <p>Wind Speed: {weather?.windspeed} km/h</p>
          <button onClick={fetchWeather}>Refresh Weather</button>
        </div>
      )}
    </div>
  );
}
