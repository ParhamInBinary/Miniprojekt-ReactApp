import { createUseStyles } from 'react-jss';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

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
    marginTop: '3rem'
  },

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
      </main>

    </div>
  )
}