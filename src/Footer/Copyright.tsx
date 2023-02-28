import { NavLink } from "react-router-dom";
import { Logo } from "../Sidebar/Logo";

export function Copyright() {
  return (
    <div>
      <NavLink to="/">
        <Logo />
      </NavLink>
    </div>
  );
}