import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });


  let updateInfo=(result)=>
  {
    setWeatherInfo(result);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App By Akhil</h2>
      <SearchBox updateInfo={updateInfo}></SearchBox>
      <br />
      <InfoBox info={weatherInfo}></InfoBox>
    </div>
  );
}
