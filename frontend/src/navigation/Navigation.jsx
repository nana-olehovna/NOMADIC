import { NavLink } from "react-router-dom"

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/registration">Registrate</NavLink>
    </nav>
  );
}