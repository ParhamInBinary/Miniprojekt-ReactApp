import { createUseStyles } from "react-jss";
import { useOutletContext } from "react-router-dom";
import { WeatherCardProps } from "../../types/types";

export function WeatherCard({ weatherData, showAddBtn }: WeatherCardProps) {
  const styles = useStyles();
  const context = useOutletContext() as [any, any]
  const favourites = context[0]
  const setFavourites = context[1]


  const handleAddToFavourites = () => {
    const clonedFavourites = [...favourites];
    clonedFavourites.push(weatherData)
    setFavourites(clonedFavourites)

  }

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
          {showAddBtn && <button className={styles.addButton} onClick={handleAddToFavourites}>
            +
          </button>}
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
  p: {
    color: 'red'
  },
  paragraph: {
    color: '#B7B78A',
    fontSize: 20
  }
});