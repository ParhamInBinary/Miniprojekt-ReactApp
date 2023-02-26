import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import facebook from '../assets/facebook.png';


const useStyles = createUseStyles({
    social: {
        height: 80,
        width: 90,
        
    }
})

export function Socials() {
    return (
        
        <>
            <img className={styles.social} src={facebook} alt="" />
        </>
    )
}