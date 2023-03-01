import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { Logo } from "./Sidebar/Logo";
import { ToggleMode } from "./Sidebar/ToggleMode";
import { useState } from "react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const styles = useStyles();

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <aside className={`${styles.aside} ${isOpen ? styles.aside: styles.asideHidden}`}>
        <nav>
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
      </aside>
      <div className={styles.hamburgerMenu}>
        <button className={styles.button} onClick={handleMenuClick}>
          <span className={styles.icon}></span>
        </button>
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  aside: {
    display: "block",
  },
  
  hamburgerMenu: {
    borderRight: "2px solid #A9A9A9",
    backgroundColor: "#CCC",
    position: "relative",
    display: "inline-block",
    verticalAlign: "middle",
    marginRight: "20px",
    cursor: "pointer",
    visibility: 'hidden',
  },
  button: {
    position: "relative",
    width: "24px",
    height: "24px",
    backgroundColor: "transparent",
    border: "none",
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "20px",
    height: "2px",
    backgroundColor: "#333",
    transition: "transform 0.3s ease-in-out",
    "&:before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "#333",
      transform: "translateY(-8px)",
      transition: "transform 0.3s ease-in-out",
    },
    "&:after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "#333",
      transform: "translateY(8px)",
      transition: "transform 0.3s ease-in-out",
    },
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
    height: "100vh",
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
  },

  "@media (max-width: 768px)": {
    
    hamburgerMenu: {
      display: "inline-block",
      visibility: 'visible',
    },
    links: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      backgroundColor: "#eee",
      borderRadius: "0",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      opacity: 0,
      visibility: "hidden",
      transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
      "& a": {
        color: "#333",
        textDecoration: "none",
        margin: "10px 0",
      },
    },
    linksVisible: {
      opacity: 1,
      visibility: "visible",
    },
  },
});
