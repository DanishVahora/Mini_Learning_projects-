import { useEffect } from "react";
import Input from "./components/input";
import Button from "./components/Buttons";
import Card from "./components/Card";
import { useWeather } from "./context/weather";
import "./App.css";

function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchDataByLocation();
  }, []);

  useEffect(() => {
    if (weather.data?.current?.is_day === 1) {
      document.body.classList.remove("night");
      document.body.classList.add("day");
    } else {
      document.body.classList.remove("day");
      document.body.classList.add("night");
    }
  }, [weather.data]);

  return (
    <>
      <div>
        <h1>Weather Application</h1>
        <Input />
        <Button value="Search" onClick={weather.fetchData} />
        <Card />
        <Button value="Refresh" onClick={weather.fetchDataByLocation} />
      </div>
    </>
  );
}

export default App;
