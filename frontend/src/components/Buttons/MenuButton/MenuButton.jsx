import Button from "../Button";
import { BurgerIcon } from "../../../../public/svg/burger";
import "./MenuButton.scss";

export default function MenuButton({ menuOpen, setMenuOpen }) {
  return (
    <Button type="button" variant="burger " onClick={() => setMenuOpen((prev) => !prev)}>
      {menuOpen ? "X" : <BurgerIcon />}
    </Button>
  );
}