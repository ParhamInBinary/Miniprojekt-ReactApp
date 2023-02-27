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
      </main>
      <footer className={styles.footer}>
        <Copyright />
        <p><Socials /></p>
      </footer>

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
  },
  footer: {
    display: 'inline-flex',
    backgroundColor: '#E19348',
    opacity: 0.7,
    justifyContent: 'space-around',
  }
})