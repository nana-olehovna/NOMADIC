import { Link } from "react-router-dom"
import './Logo.scss'

export default function Logo() {
  return (
    <div className='logoWrapper'>
      <Link className='logo' to="/">NOMADIC</Link>
    </div>
  )
}