import { KeyboardEvent, useState } from "react";
import { Searchbar } from "./Explore/Searchbar";
import { WeatherCard } from "./Explore/WeatherCard";

type WeatherData = {
  name?: string;
  sys?: { country: string };
  main?: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather?: { main: string }[];
  cod?: string;
};

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
      <Searchbar city={city} setCity={setCity} handleSearch={handleSearch} />
      <WeatherCard weatherData={weatherData} />
    </>
  );
}
