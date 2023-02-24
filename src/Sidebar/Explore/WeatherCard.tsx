import { createUseStyles } from "react-jss";

type WeatherCardProps = {
  weatherData: WeatherData;
};

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

const useStyles = createUseStyles({
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    border: "1px solid #DDD",
    borderRadius: 20,
    marginTop: "2rem",
    backgroundColor: "rgba(105,105,105, 0.8)",
    position: "relative",
  },
  cityCountry: {
    fontSize: 32,
    marginBottom: "2rem",
    borderBottom: "1px solid #DDD",
  },
  tempDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #DDD",
    borderRadius: ".5rem",
    padding: "1rem",
  },
  temp: {
    fontSize: 50,
    marginBottom: "1rem",
  },
  hl: {
    fontSize: 15,
  },
  weather: {
    marginTop: "1rem",
    fontSize: 20,
  },
  addButton: {
    height: 30,
    width: 30,
    fontSize: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    borderRadius: 55,
    position: "absolute",
    top: "85%",
    left: "80%",
    color: "#A1A1A1",
  },
});

export function WeatherCard({ weatherData }: WeatherCardProps) {
  const styles = useStyles();

  return (
    <>
      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>Look up the weather in a city!</p>
        </div>
      ) : (
        <div className={styles.itemContainer}>
          <p className={styles.cityCountry}>
            {weatherData.name}, {weatherData.sys?.country}
          </p>
          <div className={styles.tempDiv}>
            <p className={styles.temp}>{Math.round(weatherData.main.temp)}ºC</p>
            <p className={styles.hl}>
              H: {Math.round(weatherData.main.temp_max)}ºC / L:{" "}
              {Math.round(weatherData.main.temp_min)}ºC
            </p>
          </div>
          <p className={styles.weather}>{weatherData.weather?.[0].main}</p>
          <button className={styles.addButton}>
            +
          </button>
        </div>
      )}

      {weatherData.cod === "404" ? <p>City not found</p> : <></>}
    </>
  );
}
