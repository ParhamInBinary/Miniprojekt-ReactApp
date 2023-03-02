import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from './ErrorBoundary';
import { Sidebar } from './Sidebar';
import { WeatherData } from './types/types';

  export type Favourites = [WeatherData[], React.Dispatch<React.SetStateAction<WeatherData[]>>]

  export function App() {
    const [favourites, setFavourites] = useState([])
    const styles = useStyles();

  return (
    <div className={styles.body}>
      <ErrorBoundary>
        <Sidebar />
      </ErrorBoundary>
      <main className={styles.main}>
        <Outlet context={[favourites, setFavourites]}/>        
      </main>
    </div>
  )
}

const useStyles = createUseStyles({
  body: {
    display: 'flex',
    
  },
  main: {
    display: 'flex',
    flexGrow: '1',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    height: '100vh',
    position: 'relative',
  },

})