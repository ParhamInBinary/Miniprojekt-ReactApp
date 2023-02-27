import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";


export function ToggleMode(): JSX.Element {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const root = document.querySelector("#root");
   
  });

  

  return (
    <div>
      <button>Toggle</button>
    </div>
  );
}
