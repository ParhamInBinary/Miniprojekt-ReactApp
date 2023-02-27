import { createUseStyles } from 'react-jss';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Copyright } from './Footer/Copyright';
import { Socials } from './Footer/Socials';

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
    justifyContent: 'space-around',
  },
  h1: {
    marginTop: '3rem'
  },

  footer: {
    display: 'inline-flex',
    backgroundColor: '#E19348',
    opacity: 0.7,
    alignItems: "center",
    width: "100%",
    justifyContent: 'space-around',
  }

})

  export function App() {
    const styles = useStyles();

  return (
    <div className={styles.body}>
      <Sidebar />

      <main className={styles.main}>
        <h1 className={styles.h1}>Welcome to STORM Weather App</h1>
        <p>By PAMEDA</p>
        <Outlet />
        <footer className={styles.footer}>
          <Copyright />
          <Socials />
        </footer>
      </main>


    </div>
  )
}