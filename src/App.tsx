import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Outlet } from 'react-router-dom';
import { Copyright } from './Footer/Copyright';
import { Socials } from './Footer/Socials';
import { Sidebar } from './Sidebar';


  export function App() {
    const [favourites, setFavourites] = useState([])
    const styles = useStyles();

  return (
    <div className={styles.body}>
      <Sidebar />

      <main className={styles.main}>
        <Outlet context={[favourites, setFavourites]}/>
        
        <footer className={styles.footer}>
          <Copyright />
          <Socials />
        </footer>
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
    position: 'relative',
    height: '100vh',
  },
  footer: {
    display: 'flex',
    backgroundColor: '#A5A5A5',
    opacity: 0.7,
    alignItems: "center",
    justifyContent: 'center',
    gap: '1rem',
    position: 'absolute',
    top: '91.3%',
    width: '80%',
  },
})