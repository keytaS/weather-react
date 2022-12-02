import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [searched, setSearched] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setSearched(true);
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      visibility: response.data.visibility,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "c52ac46adf5f0f13abc3cf415215fbaf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <button type="Submit">Search</button>
    </form>
  );

  if (searched) {
    return (
      <div>
        {form}
        <p>
          In <strong>{weather.city}</strong> weather is described as{" "}
          <strong>{weather.description}</strong> with temperature{" "}
          <strong>{Math.round(weather.temperature)}°C</strong>. <br />
          <img src={weather.icon} alt={weather.description} />
          <br />
          More details:
        </p>
        <ul>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)} km/h</li>
          <li>Visibility: {Math.round(weather.visibility / 1000)} km</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
