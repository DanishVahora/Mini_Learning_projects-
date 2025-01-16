import React from "react";
import { useWeather } from "../context/weather";

const Card = () => {
  const weather = useWeather();

  const data = weather.data?.current;
  const location = weather.data?.location;

  if (!data || !location) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-card">
      <h1>{location.name}, {location.country}</h1>
      <p>{location.region}</p>
      <p>Last Updated: {data.last_updated}</p>

      <div className="weather-info">
        <img src={data.condition.icon} alt={data.condition.text} />
        <h2>{data.temp_c}°C</h2>
        <p>{data.condition.text}</p>
      </div>

      <div className="additional-info">
        <p>Feels Like: {data.feelslike_c}°C</p>
        <p>Humidity: {data.humidity}%</p>
        <p>Wind: {data.wind_kph} kph ({data.wind_dir})</p>
        <p>Pressure: {data.pressure_mb} mb</p>
        <p>Visibility: {data.vis_km} km</p>
      </div>
    </div>
  );
};

export default Card;
