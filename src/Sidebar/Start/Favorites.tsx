import { createUseStyles } from "react-jss";
import { useOutletContext } from "react-router-dom";
import { Favourites } from "../../App";
import { WeatherCard } from "../Explore/WeatherCard";

export function Favorites() {
  const styles = useStyles();

  const [favorites] = useOutletContext<Favourites>();

  const mappedFavs = favorites.map((favourite) => {
    return (
      <WeatherCard
        showAddBtn={false}
        key={favourite.name}
        weatherData={favourite}
      />
    );
  });

  return (
    <>
      {favorites.length < 1 ? (
        <p className={styles.p}>You have no favorites</p>
      ) : (
        mappedFavs
      )}
    </>
  );
}

const useStyles = createUseStyles({
  p: {
    color: "#B7B78A",
  },
});
