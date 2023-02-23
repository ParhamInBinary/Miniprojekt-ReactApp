import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import logo from "./assets/logoImg.jpeg";

const useStyles = createUseStyles({
  ul: {
    display: "flex",
    justifyContent: "flex-start",
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
    padding: '1.5rem 1rem',
    borderRadius: 20,
    width: '100%',
    marginTop: '.5rem',
    color: 'white',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    fontSize: 22
  },
  activeLink: {
    backgroundColor: 'green'
  },
  img: {
    height: 70,
    width: 80,
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
              <img src={logo} className={styles.img} />
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
