import { NavLink, Link } from "react-router-dom";

export default function CreateLink({list, liClassName,linkType = "Link", linkClassName }) {
  const Component = linkType === "NavLink" ? NavLink : Link
  return (
    <>
      {list.map((link) => (
        <li className={liClassName} key={link.path}>
          <Component className={linkClassName} to={link.path}>
            {link.title}
          </Component>
        </li>
      ))}
    </>
  );
}
