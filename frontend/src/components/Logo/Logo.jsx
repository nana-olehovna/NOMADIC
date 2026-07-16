import { Link } from "react-router-dom"
import './Logo.scss'

export default function Logo() {
  return (
    <div className='logoWrapper'>
      <Link className='logo' to="/">NOMADIC</Link>
    </div>
  )
}

export function LogoFullSize() {
  return (
    <div className="logoFullSize">
      <h1>N</h1>
      <h1>O</h1>
      <h1>M</h1>
      <h1>A</h1>
      <h1>D</h1>
      <h1>I</h1>
      <h1>C</h1>
    </div>
  );
}