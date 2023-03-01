import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';


  export function App() {
    const [favourites, setFavourites] = useState([])
    const styles = useStyles();

  return (
    <div className={styles.body}>
      <Sidebar />
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
  },

})