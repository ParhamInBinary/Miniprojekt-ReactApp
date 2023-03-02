import { createUseStyles } from "react-jss";
import { useOutletContext } from "react-router-dom";
import { WeatherCardProps, WeatherData } from "../../types/types";

export function AddBtn({ weatherData }: WeatherCardProps) {
  const styles = useStyles();

  const context = useOutletContext() as [WeatherData[], React.Dispatch<React.SetStateAction<WeatherData[]>>];
  const favourites = context[0];
  const setFavourites = context[1];

  const isFavourite = favourites.some((favourite: WeatherData) => favourite.name === weatherData.name);

  const handleToggleFavourite = () => {
    if (isFavourite) {
      const updatedFavourites = favourites.filter((favourite) => favourite.name !== weatherData.name);
      setFavourites(updatedFavourites);
    } else {
      const clonedFavourites = [...favourites];
      clonedFavourites.push(weatherData);
      setFavourites(clonedFavourites);
    }
  };

  return (
    <>
      <button className={styles.addButton} onClick={handleToggleFavourite}>
        {isFavourite ? "-" : "+"}
      </button>
    </>
  );
}

const useStyles = createUseStyles({
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
    cursor: "pointer",
  },
});
