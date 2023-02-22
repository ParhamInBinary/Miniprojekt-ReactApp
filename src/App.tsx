import { createUseStyles } from 'react-jss';
import { Contact } from './Header/Contact';
import { Explore } from './Header/Explore';
import { Logo } from './Header/Logo';
import { Start } from './Header/Start';
import { Location } from './Main/Location';
import { Socials } from './Footer/Socials';
import { Copyright } from './Footer/Copyright';

const useStyles = createUseStyles({
    header: {
      padding: '1rem',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      fontSize: 24,
      gap: '3rem',        
      backgroundColor: '#fff',
      color: '',
      opacity: .4,
    },  
    
    h1: {
      fontSize: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      color: 'white',
      fontFamily: 'roboto'
    }

})
  export function App() {
    const styles = useStyles();

  return (
    <div>
      <header className={styles.header}>
        <Logo />
        <Start />
        <Explore />
        <Contact />
      </header>

      <main>
        <h1 className={styles.h1}>Welcome to STORM Weather App</h1>
        <Location />
      </main>

      <footer>
        <Copyright />
        <Socials />
      </footer>

    </div>
  )
}