import { createUseStyles } from 'react-jss';
import { Outlet } from "react-router-dom";
import { Favorites } from "./Start/Favorites";

const useStyles = createUseStyles({
  itemContainer: {
    padding: '1rem',
    border: '1px solid #DDD',
    borderRadius: 20,
    marginTop: '5rem',
    backgroundColor: 'rgba(236, 236, 236, 0.4)'
  },

})

export function Start() {
  const styles = useStyles();

  return (
    <div className={styles.itemContainer}>
      <Favorites />
      <Outlet />
    </div>
  );
}