import { createUseStyles } from 'react-jss';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

const useStyles = createUseStyles({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
  },
  h1: {
    marginTop: '3rem'
  },

})

  export function App() {
    const styles = useStyles();

  return (
    <div>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.h1}>Welcome to STORM Weather App</h1>
        <p>By PAMEDA</p>
        <Outlet />
      </main>

    </div>
  )
}