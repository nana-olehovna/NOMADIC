import Button from "../Button";

export default function MenuButton({ menuOpen, setMenuOpen }) {
  return (
    <Button type="button" variant="burger " onClick={() => setMenuOpen((prev) => !prev)}>
      {" "}
      {menuOpen ? "MENU" : "X"}{" "}
    </Button>
  );
}