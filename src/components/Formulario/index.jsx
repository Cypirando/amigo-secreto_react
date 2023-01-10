import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import "./Formulario.css";
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [presente, setPresente] = useState("");
  const [imagem, setImagem] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      id:uuidv4(),
      nome,
      email,
      presente,
      imagem
    });
    setNome('')
    setEmail('')
    setPresente('')
    setImagem('')

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
        {/* <CampoTexto
          label="Imagem"
          placeholder="coloque o endereço da imagem "
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        /> */}
        <Botao>Adicionar</Botao>
      </form>
    </section>
  );
};

export default Formulario;
