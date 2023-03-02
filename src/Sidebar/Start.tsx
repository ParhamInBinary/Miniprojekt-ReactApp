import { createUseStyles } from 'react-jss';
import { ErrorBoundary } from '../ErrorBoundary';
import { Favorites } from "./Start/Favorites";

export function Start() {
  const styles = useStyles();

  return (
    <>
    <h1 className={styles.h1}>Welcome to STORM Weather App</h1>
    <p className={styles.paragraph}>By PAMEDA</p>
    <div className={styles.itemContainer}>
      <ErrorBoundary>
        <Favorites />
      </ErrorBoundary>
    </div>
    </>
  );
}

const useStyles = createUseStyles({
  itemContainer: {
    padding: '1rem',
    border: '1px solid #DDD',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '60%',
    borderRadius: 20,
    marginTop: '5rem',
    marginBottom: '3rem',
    backgroundColor: 'rgba(236, 236, 236, 0.4)',
    overflow: 'scroll',
  },
  h1: {
    marginTop: '3rem',
    color: '#B7B78A',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    color: '#B7B78A'
  },
  "@media (max-width: 768px)": {
    itemContainer: {
      maxWidth: '90%',
    },
  }
})