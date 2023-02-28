import { useOutletContext } from "react-router-dom";
import { WeatherData } from "../../types/types";
import { WeatherCard } from "../Explore/WeatherCard";
import { createUseStyles } from "react-jss";


export function Favorites() {
    const styles = useStyles();

    const context = useOutletContext() as [any]
    const favorites = context[0] as WeatherData[]

    const mappedFavs = favorites.map(favourite => {
        return <WeatherCard showAddBtn={false} key={favourite.name} weatherData={favourite} />
    })
    
    return (
        <>
            {favorites.length < 1 ? <p className={styles.p}>You have no favorites</p> : mappedFavs}
        </>
    )
}

const useStyles = createUseStyles({
    p: {
        color: '#B7B78A',
    },
})