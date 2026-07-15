import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Navigation, MobileNavigation } from "@/navigation";
import { ThemeToggle } from '../index'
import { LinkToLoginButton, MenuButton } from '../Buttons/index'
import './Header.scss'


function Logo() {
  return (
    <div className='logoWrapper'>
      <Link className='logo' to="/">NOMADIC</Link>
    </div>
  )
}

export default function Header() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <Logo />
      <Navigation moreOpen={moreOpen} setMoreOpen={setMoreOpen} />
      <div className="personalizationWrapper">
        <ThemeToggle />
        <LinkToLoginButton />
      </div>
      <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileNavigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
}