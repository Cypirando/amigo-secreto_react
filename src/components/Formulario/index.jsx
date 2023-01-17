import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import "./Formulario.css";
import { v4 as uuidv4 } from "uuid";
// import MensagenDeErro from "../MensagenDeErro";

const Formulario = ({ aoColaboradorCadastrado, colaboradores }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      alert("email invalido.");
    } else if (
      colaboradores.find((colaborador) => colaborador.email === email)
    ) {
      alert("Email ja usado.");
    } else {
      aoColaboradorCadastrado({
        id: uuidv4(),
        nome,
        email,
      });
      setNome("");
      setEmail("");

      // console.log("Form foi submetido=", nome, email);
    }
  };

  return (
    <div className="formulario">
      <form onSubmit={aoSalvar}>
        <CampoTexto
          obrigatorio
          label="Nome"
          placeholder="Digite o nome dos participantes"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio
          label="Email"
          placeholder="Digite seu email dos participantes"
          valor={email}
          aoAlterado={(valor) => setEmail(valor)}
        />
        <Botao texto="Adicionar" />
      </form>
    </div>
  );
};

export default Formulario;
