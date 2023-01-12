import Participante from "../Participante";
import "./Participantes.css";
import Botao from "../Botao";
import criarSorteio from "../../api";

// import { v4 as uuidv4 } from "uuid";

const Participantes = ({aoDeletar,colaboradores,corPrimaria,testeDoClick,corSecundaria}) => {
  console.log("arrai com a lista=",colaboradores)
   function onClick() {
   criarSorteio(colaboradores);
  console.log("cliquei")
}

  return (
    <section
      className="participantes"
      style={{
        backgroundImage: "url(/images/fundo.png)",
        backgroundColor: corPrimaria,
      }}
    >
      <h3 style={{ borderColor: corSecundaria }}>{colaboradores.nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((participante, indice) => {
          console.log( <Participante
            key={indice}
            colaborador={participante}
            corDeFundo={corSecundaria}
            aoDeletar={aoDeletar}
          />)
          return (
            <Participante
              key={indice}
              colaborador={participante}
              corDeFundo={corSecundaria}
              aoDeletar={aoDeletar}
            />
            
          );
        })}
        <Botao  onClick={onClick}>Sortear</Botao>

      </div>
    </section>
  );
};

export default Participantes;
