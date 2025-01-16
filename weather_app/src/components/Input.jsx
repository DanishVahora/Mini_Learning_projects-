import React from "react";
import { useWeather } from "../context/weather";

const Input = () => {
  const { searchCity, setSearchCity } = useWeather();

  const handleInputChange = (e) => {
    setSearchCity(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Enter city name"
      value={searchCity}
      onChange={handleInputChange}
    />
  );
};

export default Input;
