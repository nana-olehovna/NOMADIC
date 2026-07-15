import { useState } from "react";

import { CreateLink, visibleLinks, moreLinks } from "../helpers";
import { ThemeToggle, LinkToLoginButton } from "@/components";
import './MobileNavigation.scss'

// Мобильная версия навигации

export default function MobileNavigation({ menuOpen, setMenuOpen }) {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className={`mobileNav ${menuOpen ? "mobileNavVisible" : "mobileNavHidden"}`}>
      <ul className="mobileNavList">
        {/* Список видимых ссылок */}
        <CreateLink
          list={visibleLinks}
          liClassName="mobileNavItemImg"
          linkClassName="mobileNavLinkImg"
          onClick={() => setMenuOpen(false)}
        />
        {/* Кнопка с выпадашкой More */}
        <li className="mobileNavItem">
          <button className="mobileNavLink" onClick={() => setMoreOpen((prev) => !prev)}>
            More
            <div className="arrowDiv">
              {moreOpen ? (
                <img src="/icons/angle-small-up.svg" alt="arrow up" />
              ) : (
                <img src="/icons/angle-small-down.svg" alt="arrow down" />
              )}
            </div>
          </button>
          {/* Выпадашка: список дополнительных ссылок*/}

          <ul
            className={`mobileDropDownList ${moreOpen ? "mobileDropdownVisible" : "mobileDropdownHidden"}`}
          >
            <CreateLink
              list={moreLinks}
              liClassName="mobileDropDownItem"
              linkClassName="mobileDropdownLink"
              onClick={() => setMenuOpen(false)}
            />
          </ul>
        </li>
        <li className="mobileNavItem">
          <div className="personalizationWrapperMobile">
            <ThemeToggle />
            <LinkToLoginButton />
          </div>
        </li>
        <li className="mobileNavItem"></li>
      </ul>
    </nav>
  );
}

