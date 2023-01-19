import "./Menu.css";
import MenuLink from "../MenuLink";

const Menu = ({ grupo }) => {
  return (
    <header>
      <nav className="navegacao">
        <MenuLink state={{ nomeDoSorteio: grupo }} to="/">
          Início
        </MenuLink>
        <MenuLink to="/formulario"></MenuLink>
        <MenuLink to="/fim"></MenuLink>
      </nav>
    </header>
  );
};

export default Menu;
