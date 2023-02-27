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
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const root = document.querySelector("#root");
    if (darkTheme && root) {
      root.classList.add(styles.darkTheme);
      root.classList.remove(styles.lightTheme);
    } else if (root) {
      root.classList.add(styles.lightTheme);
      root.classList.remove(styles.darkTheme);
    }
  }, [darkTheme, styles]);

  const handleToggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div>
      <button onClick={handleToggleTheme}>Toggle</button>
    </div>
  );
}
