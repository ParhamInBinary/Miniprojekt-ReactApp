import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  lightTheme: {
    backgroundColor: '#EAEAEA',
  },
  darkTheme: {
    backgroundColor: '#000000',
  }
});

export function ToggleMode(): JSX.Element {
  const styles = useStyles();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const root = document.querySelector("#root");
    if (isDarkTheme && root) {
      root.classList.add(styles.darkTheme);
      root.classList.remove(styles.lightTheme);
    } else if (root) {
      root.classList.add(styles.lightTheme);
      root.classList.remove(styles.darkTheme);
    }
  }, [isDarkTheme, styles]);

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div>
      <button onClick={handleToggleTheme}>Toggle</button>
    </div>
  );
}
