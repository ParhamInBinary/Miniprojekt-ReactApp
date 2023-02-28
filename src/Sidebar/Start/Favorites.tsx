import { useOutletContext } from "react-router-dom";
import { WeatherData } from "../../types/types";
import { WeatherCard } from "../Explore/WeatherCard";

export function Favorites() {
    const context = useOutletContext() as [any]
    const favorites = context[0] as WeatherData[]

    const mappedFavs = favorites.map(favourite => {
        return <WeatherCard showAddBtn={false} key={favourite.name} weatherData={favourite} />
    })
    
    return (
        <>
            {favorites.length < 1 ? <p>You have no favorites</p> : mappedFavs}
        </>
    )
}