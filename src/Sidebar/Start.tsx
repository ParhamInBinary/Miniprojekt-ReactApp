import { createUseStyles } from 'react-jss';
import { Favorites } from "./Start/Favorites";

export function Start() {
  const styles = useStyles();

  return (
    <>
    <h1 className={styles.h1}>Welcome to STORM Weather App</h1>
    <p className={styles.paragraph}>By PAMEDA</p>
    <div className={styles.itemContainer}>
      <Favorites />
    </div>
    </>
  );
}

const useStyles = createUseStyles({
  itemContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    padding: '1rem',
    border: '1px solid #DDD',
    borderRadius: 20,
    marginTop: '5rem',
    backgroundColor: 'rgba(236, 236, 236, 0.4)',
    overflow: 'scroll',
  },
  h1: {
    marginTop: '3rem',
    color: '#B7B78A',
    fontWeight: 'bold'
  },
  paragraph: {
    color: '#B7B78A'
  }
})