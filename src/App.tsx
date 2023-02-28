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

  h1: {
    marginTop: '3rem',
    color: '#B7B78A',
    fontWeight: 'bold'
  },



  footer: {
    display: 'inline-flex',
    backgroundColor: '#E19348',
    opacity: 0.7,
    alignItems: "center",
    justifyContent: 'space-around'
  },
  p: {
    color: '#B7B78A'
  }

})

  export function App() {
    const styles = useStyles();

  return (
    <div className={styles.body}>
      <Sidebar />
      <main className={styles.main}>
        <h1 className={styles.h1}>Welcome to STORM Weather App</h1>
        <p className={styles.p}>By PAMEDA</p>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Copyright />
        <p><Socials /></p>
      </footer>

    </div>
  )
}

