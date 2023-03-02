import { KeyboardEvent, useState } from "react";
import { ErrorBoundary } from "../ErrorBoundary";
import { WeatherData } from "../types/types";
import { Searchbar } from "./Explore/Searchbar";
import { WeatherCard } from "./Explore/WeatherCard";


export function Explore() {

  const apiKey = "70ac5e6054972523c1ba9f40bb794ba9";
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const [city, setCity] = useState("");

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data: WeatherData) => {
          setWeatherData(data);
          setCity("");
        });
    }
  };

  return (
    <>
      <ErrorBoundary>
        <Searchbar city={city} setCity={setCity} handleSearch={handleSearch} />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <WeatherCard showAddBtn={true} weatherData={weatherData} />
      </ErrorBoundary>
    </>
  );
}
