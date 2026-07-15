import { useState } from 'react'

import { Logo, LinkToLoginButton, MenuButton, ThemeToggle } from "@/components";
import { Navigation, MobileNavigation } from "@/navigation";
import './Header.scss'




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