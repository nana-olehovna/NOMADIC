import { useState } from "react";
import { NavLink } from "react-router-dom"
import './Navigation.scss'

const moreLinks = [
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/membership",
    title: "Membership",
  },
  {
    path: "/tours",
    title: "All Tours",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/coming-soon",
    title: "Coming soon",
  },
  {
    path: "/q&a",
    title: "Q&A",
  },
  {
    path: "/contacts",
    title: "Contacts",
  },
];



function CreateMoreLinks() {
  return (
    <>
      {moreLinks.map((link) => (
        <li className="headerDropDownItem" key={link.path}>
          <NavLink className="headerDropdownLink" to={link.path}>
            {link.title}
          </NavLink>
        </li>
      ))}
    </>
  );
}


export default function Navigation() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="headerNav">
      <ul className="headerNavList">
        <li className="headerNavItem"><NavLink className="headerNavLink" to="/morocco">Morocco</NavLink></li>
        <li className="headerNavItem"><NavLink className="headerNavLink"  to="/jordan">Jordan</NavLink></li>
        <li className="headerNavItem"><NavLink className="headerNavLink"  to="/oman">Oman</NavLink></li>
        <li className="headerNavItem"><button className="headerNavLink headerLinkBtn"  onClick={() => setOpen(!open)}>More</button>
          <ul className={`headerDropDownList ${open ? "dropdownVisible" : "dropdownHidden"}`}>
            <CreateMoreLinks />
          </ul>
        </li>
      </ul>
    </nav>
  );
}