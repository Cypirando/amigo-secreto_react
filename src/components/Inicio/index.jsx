import "./Inicio.css";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
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
          label="Grupo"
          placeholder="Digite o nome grupo!"
          valor={nomeDoSorteio}
          aoAlterado={(valor) => SetNomeDoSorteio(valor)}
        />

        <Botao onClick={mudarRota} texto="Avançar"></Botao>
      </form>
    </section>
  );
};

export default Inicio;
