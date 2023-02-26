import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { Logo } from "../Sidebar/Logo";


const useStyles = createUseStyles({
    footer: {
        display: "flex",
        flexGrow: "1",
        flexDirection: "row",
        
    },
})

export function Copyright() {
    const styles = useStyles();
    return (
        <div className={styles.footer}>
                <NavLink to="/">
                    <Logo />
                </NavLink>
        </div>
    )
}