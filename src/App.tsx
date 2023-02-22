import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    App: {
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
    },
})
  export function App() {
    const styles = useStyles();

  return (
    <div className={styles.App}>
      
    </div>
  )
}