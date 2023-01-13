import "./Menu.css";
// import style from '../../components/Menu/Menu.module.scss'
import MenuLink from "../MenuLink";
const Menu = () => {
  return (
    <header>
      <nav className="navegacao">
        <MenuLink to="/">Início</MenuLink>
        <MenuLink to="/formulario">Sorteio</MenuLink>
        <MenuLink to="/fim">Fim</MenuLink>
      </nav>
    </header>
  );
};

export default Menu;
