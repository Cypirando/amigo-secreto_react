import { useState } from "react";
import Botao from "../../components/Botao";
import CampoTexto from "../../components/CampoTexto";
import "./Formulario.css";
import { v4 as uuidv4 } from "uuid";
// import MensagenDeErro from "../MensagenDeErro";

const Formulario = ({ aoColaboradorCadastrado, colaboradores }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const [emailRepetido, setEmailRepetido] = useState(false);
  const [emailIvalido, setEmailInvalido] = useState(false);



  const aoSalvar = (evento) => {
    evento.preventDefault();
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      setEmailInvalido(true)
    } else if (
      colaboradores.find((colaborador) => colaborador.email === email)
      
    ) {
      setEmailRepetido(true);
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
  const aoAlterarEmail = (valor) => {
    setEmail(valor);
    setEmailRepetido(false);
    setEmailInvalido(false);
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
          aoAlterado={aoAlterarEmail}
          emailRepetido={emailRepetido}
          emailIvalido={emailIvalido}

        />
        <Botao texto="Adicionar" />
      </form>
    </div>
  );
};

export default Formulario;
