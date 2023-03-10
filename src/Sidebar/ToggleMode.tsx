import { useEffect, useState } from "react";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { createUseStyles } from "react-jss";
import ReactSwitch from "react-switch";

const localStorageKey = "darkTheme";

export function ToggleMode(): JSX.Element {
  const styles = useStyles();
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem(localStorageKey) === "true"
  );

  useEffect(() => {
    const root = document.querySelector("#root");
    if (darkTheme && root) {
      root.classList.add(styles.darkTheme);
      root.classList.remove(styles.lightTheme);
    } else if (root) {
      root.classList.add(styles.lightTheme);
      root.classList.remove(styles.darkTheme);
    }

    localStorage.setItem(localStorageKey, darkTheme.toString());
  }, [darkTheme, styles]);

  const handleChange = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div>
      <ReactSwitch
      className={styles.switch}
        checked={darkTheme}
        onChange={handleChange}
        checkedIcon={<BsMoonFill className={styles.iconMoon} />}
        uncheckedIcon={<BsFillSunFill className={styles.iconSun} />}
        onColor="#000"
        offColor="#FFF"
        onHandleColor="#FFF"
        offHandleColor="#000"
      />
    </div>
  );
}

const useStyles = createUseStyles({
  lightTheme: {
    backgroundColor: '#EAEAEA',
  },
  darkTheme: {
    backgroundColor: '#000000',
  },
  switch: {
    marginTop: '2rem',
  },
  iconMoon: {
    width: "20px",
    height: "20px",
    color: "white",
    marginTop: 4,
    marginLeft: 4
  },
  iconSun: {
    width: "20px",
    height: "20px",
    color: 'yellow',
    marginTop: 4,
    marginLeft: 4
  }
});
