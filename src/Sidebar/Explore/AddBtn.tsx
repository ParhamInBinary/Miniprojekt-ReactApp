import { createUseStyles } from "react-jss";
import { useOutletContext } from "react-router-dom";
import { Favourites } from "../../App";
import { WeatherCardProps } from "../../types/types";

export function AddBtn({ weatherData }: WeatherCardProps) {
  const styles = useStyles();

  const [favourites, setFavourites] = useOutletContext<Favourites>();

  const isFavourite = favourites.some((favourite) => favourite.name === weatherData.name);

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
