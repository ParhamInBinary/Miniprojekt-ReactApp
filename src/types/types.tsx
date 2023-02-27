export type WeatherCardProps = {
  weatherData: WeatherData;
  showAddBtn: boolean;
};

export type WeatherData = {
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
