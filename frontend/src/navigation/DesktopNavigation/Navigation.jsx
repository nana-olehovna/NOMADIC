import { CreateLink } from "../helpers";
import { visibleLinks, moreLinks } from "../helpers/linksLists";
import "./Navigation.scss";

{/* Основная навигация для десктоп версии: Хедер */}

export default function Navigation({ moreOpen, setMoreOpen }) {
  return (
    <nav className="headerNav">
      <ul className="headerNavList">
        {/* Список видимых ссылок */}
        <CreateLink
          list={visibleLinks}
          liClassName="headerNavItem"
          linkType="NavLink"
          linkClassName="headerNavLink"
        />
        {/* Кнопка с выпадашкой More */}
        <li
          className="headerNavItem"
          onMouseEnter={() => setMoreOpen(true)}
          onMouseLeave={() => setMoreOpen(false)}
        >
          <button
            className="headerNavLink headerLinkBtn"
            onClick={() => setMoreOpen((prev) => !prev)}
          >
            More
            <div className="arrowDiv">
              {moreOpen ? <img src="/icons/angle-small-up.svg" alt="arrow up" /> : <img src="/icons/angle-small-down.svg" alt="arrow down" />}
            </div>
          </button>
          {/* Выпадашка: список дополнительных ссылок*/}
          <ul className={`headerDropDownList ${moreOpen ? "dropdownVisible" : "dropdownHidden"}`}>
            <CreateLink
              list={moreLinks}
              liClassName="headerDropDownItem"
              linkClassName="headerDropdownLink"
              onClick={() => setMoreOpen(false)}
            />
          </ul>
        </li>
      </ul>
    </nav>
  );
}
