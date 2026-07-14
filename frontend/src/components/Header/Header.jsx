import { Link } from 'react-router-dom'

import { Navigation } from '@/navigation'
import { ThemeToggle } from '../index'
import { LinkToLoginButton } from '../Buttons/index'
import './Header.scss'


function Logo() {
  return (
    <div className='logoWrapper'>
      <Link className='logo' to="/">NOMADIC</Link>
    </div>
  )
}

export default function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
      <div className="personalizationWrapper">
        <ThemeToggle />
        <LinkToLoginButton />
      </div>
    </header>
  );
}