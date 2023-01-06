import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [presente, setPresente] = useState("");


  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      email,
      presente,
    });
    console.log("Form foi submetido=", nome, email, presente);
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o sorteio</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome dos participantes"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Email"
          placeholder="Digite seu email dos participantes"
          valor={email}
          aoAlterado={(valor) => setEmail(valor)}
        />
        <CampoTexto
          label="Presente"
          placeholder="De alguma sugestão para presente"
          valor={presente}
          aoAlterado={(valor) => setPresente(valor)}
        />
        <Botao>Criar Sorteio</Botao>
      </form>
    </section>
  );
};

export default Formulario;
