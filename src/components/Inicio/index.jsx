import "./Inicio.css";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";


const Inicio = (props) => {
  const [grupo, setGrupo] = useState("");

  const aoSalvarGrupo = (evento) => {
    evento.preventDefault();
    props.aoGrupoCadastrado({
      id: uuidv4(),
      grupo,
    });
    setGrupo("");

    console.log("Form foi submetido=", grupo);
  };


  return (
    <section onSubmit={aoSalvarGrupo} className="cabecalho">
      <div className="hearders">
        <h1>Sorteio Para Amigo Secreto</h1>
      </div>
      <div className="caixa">
      
      <CampoTexto
          label="Grupo"
          placeholder="Digite o nome grupo!"
          valor={grupo}
          aoAlterado={(valor) => setGrupo(valor)}
        />
        <Botao texto="Avançar" />
      </div>
    </section>
  );
};

export default Inicio;
