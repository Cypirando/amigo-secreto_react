import "./Menu.css";
// import style from '../../components/Menu/Menu.module.scss'
import MenuLink from "../MenuLink";
// import Final from "../../pages/Final";

const Menu = ({ grupo }) => {
  // console.log(grupo, "MENU");
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
