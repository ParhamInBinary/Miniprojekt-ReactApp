import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import telefon from "../assets/telefon.png";

export function Socials() {
  const styles = useStyles();
  return (
    <>
      <NavLink to="/">
        <img className={styles.social} src={facebook} alt="" />
        <img className={styles.social} src={instagram} alt="" />
        <img className={styles.social} src={telefon} alt="" />
      </NavLink>
    </>
  );
}

const useStyles = createUseStyles({
  social: {
    height: 40,
    width: 40,
    margin: '0 .5rem',
  },
});
