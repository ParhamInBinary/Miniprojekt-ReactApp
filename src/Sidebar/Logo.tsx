import { createUseStyles } from "react-jss";
import logo from '../assets/logoImg.jpeg';

const useStyles = createUseStyles({
    logo: {
        height: 80,
        width: 90,
        
    }
})

export function Logo() {
    const styles = useStyles();
    return (
        <>
            <img className={styles.logo} src={logo} alt="" />
        </>
    )
}