import { createUseStyles } from "react-jss";
import { useOutletContext } from "react-router-dom";
import { WeatherCardProps } from "../../types/types";

export function AddBtn({ weatherData }: WeatherCardProps) {
  const styles = useStyles();

  const context = useOutletContext() as [any, any];
  const favourites = context[0];
  const setFavourites = context[1];

  const isFavourite = favourites.some((favourite: any) => favourite.name === weatherData.name);

  const handleAddToFavourites = () => {
    const clonedFavourites = [...favourites];
    clonedFavourites.push(weatherData);
    setFavourites(clonedFavourites);
  };

  return (
    <>
      {isFavourite ? (
        <span>Added in favourites</span>
      ) : (
        <button className={styles.addButton} onClick={handleAddToFavourites}>
          +
        </button>
      )}
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
