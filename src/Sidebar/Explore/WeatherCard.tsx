import { createUseStyles } from "react-jss";
import { WeatherCardProps } from "../../types/types";
import { AddBtn } from "./AddBtn";

export function WeatherCard({ weatherData, showAddBtn }: WeatherCardProps) {
  const styles = useStyles();

  return (
    <>
      {typeof weatherData.main === "undefined" ? (
        <div>
          <p className={styles.paragraph}>Look up the weather in a city!</p>
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
          <AddBtn weatherData={weatherData} showAddBtn={showAddBtn}/>
        </div>
      )}

      {weatherData.cod === "404" ? <p className={styles.p}>City not found</p> : <></>}
    </>
  );
}

const useStyles = createUseStyles({
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    width: '20rem',
    alignItems: "center",
    padding: "2rem",
    border: "1px solid #DDD",
    borderRadius: 20,
    backgroundColor: "rgba(105,105,105, 0.8)",
    position: "relative",
    margin: '1rem',
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
  p: {
    color: 'red'
  },
  paragraph: {
    color: '#B7B78A',
    fontSize: 20
  },
  "@media (max-width: 768px)": {
    itemContainer: {
      width: '15rem',
    },

  }
});