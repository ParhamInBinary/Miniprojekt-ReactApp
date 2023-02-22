import { createUseStyles } from "react-jss";
import logo from '../assets/logoImg.jpeg';

const useStyles = createUseStyles({
    logoDiv: {
        display: "flex",
        marginLeft: 30,
    },
    logo: {
        height: 50,
        width: 60,
        
    }
})

export function Logo() {
    const styles = useStyles();
    return (
        <div className={styles.logoDiv}>
            <img className={styles.logo} src={logo} alt="" />
        </div>
    )
}