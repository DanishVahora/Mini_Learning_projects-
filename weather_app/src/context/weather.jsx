import React, { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await getWeatherDataForCity(searchCity);
      setData(res);
    } catch (err) {
      setError("Could not fetch data for the specified city.");
    }
  };

  const fetchDataByLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await getWeatherDataForLocation(latitude, longitude);
          setData(res);
        } catch (err) {
          setError("Could not fetch data for your location.");
        }
      },
      (err) => setError("Please allow location access.")
    );
  };

  return (
    <WeatherContext.Provider
      value={{
        data,
        searchCity,
        setSearchCity,
        fetchData,
        fetchDataByLocation,
        error,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
