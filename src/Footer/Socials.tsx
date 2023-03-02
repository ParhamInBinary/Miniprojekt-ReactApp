import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import telefon from "../assets/telefon.png";

export function Socials() {
  const styles = useStyles();
  return (
    <>
    <div className={styles.social}>
      <NavLink to="/">
        <img className={styles.img} src={facebook} alt="" />
      </NavLink>

      <NavLink to="/">
        <img className={styles.img} src={instagram} alt="" />
      </NavLink>

      <NavLink to="/">
        <img className={styles.img} src={telefon} alt="" />
      </NavLink>
    </div>
    </>
  );
}

const useStyles = createUseStyles({
  social: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#CCC',
    width: '100%',
    marginBottom: '1rem',
  },
  img: {
    width: 40,
    height: 40
  }
});
