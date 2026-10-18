import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const searchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      setWeather(data);
    } catch (err) {
      setError("City not found. Please enter a valid city name.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <p>Check the current weather of any city</p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={searchWeather}>
          Search
        </button>
      </div>

      {loading && <p>Loading weather...</p>}

      {error && <p>{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>

          <p>{weather.weather[0].description}</p>

          <h3>{Math.round(weather.main.temp)} °C</h3>

          <p>Feels like: {Math.round(weather.main.feels_like)} °C</p>

          <p>Humidity: {weather.main.humidity}%</p>

          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;