import "./Inicio.css";
import Botao from "../../components/Botao";
import CampoTexto from "../../components/CampoTexto";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Inicio = (props) => {
  const location = useLocation();

  const [nomeDoSorteio, SetNomeDoSorteio] = useState(
    location.state?.nomeDoSorteio || ""
  );
  let navigate = useNavigate();

  function mudarRota() {
    props.aoSalvarNomeGrupo(nomeDoSorteio);
    navigate("/formulario", { state: { nomeDoSorteio } });
  }

  const aoSalvarGrupo = (evento) => {
    // console.log("evento", evento);
    evento.preventDefault();
  };

  return (
    <section className="cabecalho">
      <form onSubmit={aoSalvarGrupo} className="caixa">
        <CampoTexto
          obrigatorio
          label="Nome Do Sorteio"
          placeholder="Digite o nome do sorteio!"
          valor={nomeDoSorteio}
          aoAlterado={(valor) => SetNomeDoSorteio(valor)}
        />

        <Botao onClick={mudarRota} texto="Avançar"></Botao>
      </form>
    </section>
  );
};

export default Inicio;
