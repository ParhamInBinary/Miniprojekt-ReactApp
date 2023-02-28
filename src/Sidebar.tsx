
import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Logo } from "./Sidebar/Logo";

const useStyles = createUseStyles({
  ul: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#CCC",
    borderRight: "2px solid #A9A9A9",
    padding: "1rem",
    listStyleType: "none",
    fontSize: "1rem",
    height: "100vh",
    width: "15rem",
    transition: "width 0.5s ease",
    "@media screen and (max-width: 768px)": {
      width: 0,
      padding: 0,
      border: 0,
      overflow: "hidden",
    },
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
  },
  hamburger: {
    display: "block",
    position: "absolute",
    top: "20px",
    width: "40px",
    height: "40px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    zIndex: 10,
  },
  hamburgerBar: {
    display: "block",
    position: "relative",
    width: "100%",
    height: "100%",
    "& span": {
      display: "block",
      position: "absolute",
      width: "100%",
      height: "2px",
      background: "black",
      borderRadius: "5px",
      transition: "all .25s ease-in-out",
      "&:nth-child(1)": {
        top: "25%",
        transform: "translateY(-25%)",
      },
      "&:nth-child(2)": {
        top: "50%",
        transform: "translateY(-50%)",
      },
      "&:nth-child(3)": {
        top: "75%",
        transform: "translateY(-75%)",
      },
    },
  },
  open: {
    "& $hamburgerBar:nth-child(1)": {
      transform: "rotate(45deg)",
      top: "50%",
    },
    "& $hamburgerBar:nth-child(2)": {
      opacity: "0",
    },
    "& $hamburgerBar:nth-child(3)": {
      transform: "rotate(-45deg)",
      top: "50%",
    },
    display: "block",
  },
 
  closed: {
    display: "none",
  },
});

export function Sidebar() {
  const styles = useStyles();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
  };

  return (
    <>
      <aside className={isMenuOpen ? styles.open : ""}>
        <nav>
        <button className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.hamburgerBar} ${isMenuOpen ? styles.open : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        </button>
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
          </ul>
        </nav>
      </aside>
      
    </>
  );
}
