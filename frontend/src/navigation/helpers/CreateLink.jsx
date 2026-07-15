import { NavLink, Link } from "react-router-dom";

export default function CreateLink({list, liClassName,linkType = "Link", linkClassName, onClick }) {
  const Component = linkType === "NavLink" ? NavLink : Link
  return (
    <>
      {list.map((link) => (
        <li className={liClassName} key={link.path} onClick={onClick}>
          <Component className={linkClassName} to={link.path}>
            {link.title}
          </Component>
        </li>
      ))}
    </>
  );
}
