import { createUseStyles } from 'react-jss';
import { Favorites } from "./Start/Favorites";

export function Start() {
  const styles = useStyles();

  return (
    <>
    <h1 className={styles.h1}>Welcome to STORM Weather App</h1>
    <p>By PAMEDA</p>
    <div className={styles.itemContainer}>
      <Favorites />
    </div>
    </>
  );
}

const useStyles = createUseStyles({
  itemContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '1rem',
    border: '1px solid #DDD',
    borderRadius: 20,
    marginTop: '5rem',
    backgroundColor: 'rgba(236, 236, 236, 0.4)'
  },
  h1: {
    marginTop: '3rem'
  },
})