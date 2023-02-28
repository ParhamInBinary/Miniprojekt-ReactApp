import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { Logo } from "./Sidebar/Logo";
import { ToggleMode } from "./Sidebar/ToggleMode";

export function Sidebar() {
  const styles = useStyles();

  return (
    <aside>
      <nav>
        <ul className={styles.ul}>
          <li>
            <NavLink to="/">
              <Logo />
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to="/" className={styles.link}>Start</NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to="explore" className={styles.link}>Explore</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

const useStyles = createUseStyles({
  ul: {
    display: "flex",
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: "#CCC",
    borderRight: '2px solid #A9A9A9',
    padding: "1rem",
    listStyleType: "none",
    fontSize: "1rem",
    height: "100vh",
    width: '15rem'
  },
  li: {
    borderRadius: 10,
    margin: '.5rem 0',
    width: '100%',
    backgroundColor: 'white',
    padding: '.5rem 1rem',
},
link: {
    color: 'black',
    textDecoration: 'none',
    fontSize: 22,
    width: '100%',
  },
});

export function Sidebar() {
  const styles = useStyles();

  return (
    <aside>
      <nav>
        <ul className={styles.ul}>
          <li>
            <NavLink to="/">
              <Logo />
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to="/" className={styles.link}>Start</NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to="explore" className={styles.link}>Explore</NavLink>
          </li>
          <ToggleMode />
        </ul>
      </nav>
    </aside>
  );
}
