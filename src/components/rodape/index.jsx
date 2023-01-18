//src/componentes/Rodape/index.js
import MenuLink from "../MenuLink";
import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <MenuLink to="/">
              <img src="../images/icones/home.png" alt="home" />
            </MenuLink>
          </li>
        </ul>
      </section>
      <section>
        <img src="/images/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por Botdesigner.</p>
      </section>
    </footer>
  );
};

export default Rodape;
