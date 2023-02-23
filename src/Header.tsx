import { createUseStyles } from 'react-jss';
import { NavLink } from "react-router-dom";
import logo from "./assets/logoImg.jpeg"

const useStyles = createUseStyles({
    ul: {
        display: 'flex',
        alignItems: 'center',
        gap: '3rem',
        backgroundColor: '#DDD',
        padding: '1rem',
        listStyleType: 'none',
        fontSize: '1rem',
    },
    img: {
        height: 50,
        width: 60,
    },
})

export function Header() {
    const styles = useStyles();

    return(
        <header>
            <nav>
                <ul className={styles.ul}>
                    <li>
                        <NavLink to="/"><img src={logo} className={styles.img}/></NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Start</NavLink>
                    </li>
                    <li>
                        <NavLink to="explore">Explore</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}