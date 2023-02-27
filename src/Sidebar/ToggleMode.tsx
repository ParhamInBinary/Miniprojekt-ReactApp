import { useState } from "react";
import { createUseStyles } from "react-jss";



export function ToggleMode(): JSX.Element {
 
  const [isDarkTheme, setIsDarkTheme] = useState(false);



  return (
    <div>
      <button>Toggle</button>
    </div>
  );
}
