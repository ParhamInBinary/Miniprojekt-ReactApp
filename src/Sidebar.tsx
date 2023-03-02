import { useState } from "react";
import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { Socials } from "./Footer/Socials";
import { Logo } from "./Sidebar/Logo";
import { ToggleMode } from "./Sidebar/ToggleMode";


export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const styles = useStyles();

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <aside className={`${styles.aside} ${isOpen ? styles.aside: styles.asideHidden}`}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li>
              <NavLink to="/">
                <Logo />
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink to="/" className={styles.link}>
                Start
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink to="explore" className={styles.link}>
                Explore
              </NavLink>
            </li>
            <ToggleMode />
          </ul>
        </nav>
          <Socials />
      </aside>
      <div className={styles.hamburgerMenu}>
        <button className={styles.button} onClick={handleMenuClick}>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
        </button>
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  aside: {
    display: "flex",
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    height: "100vh",
    backgroundColor: "#CCC",
    position: 'absolute',
      zIndex: 1,
      borderRight: "2px solid #A9A9A9"
  },
  nav: {
    backgroundColor: 'transparent',
  },
  hamburgerMenu: {
    backgroundColor: "#CCC",
    cursor: "pointer",
    zIndex: 2,
    border: 'none',
    height: 32,
    borderRadius: 8
  },
  button: {
    border: 'none',
    backgroundColor: 'transparent',
  },
  icon: {
    width: 24,
    height: 2,
    backgroundColor: 'transparent',
    borderBottom: '3px solid black',
    margin: 5,
  },
  asideHidden:{ 
    display: 'none',
  },
  ul: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#CCC",
    padding: "1rem",
    listStyleType: "none",
    fontSize: "1rem",
    width: "15rem",
  },
  li: {
    borderRadius: 10,
    margin: ".5rem 0",
    width: "100%",
    backgroundColor: "white",
    padding: ".5rem 1rem",
  },
  link: {
    color: "black",
    textDecoration: "none",
    fontSize: 22,
    width: "100%",
  }
});
