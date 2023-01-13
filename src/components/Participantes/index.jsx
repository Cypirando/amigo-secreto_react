import Participante from "../Participante";
import "./Participantes.css";
import Botao from "../Botao";
import criarSorteio from "../../api";

// import { v4 as uuidv4 } from "uuid";

const Participantes = ({ aoDeletar, colaboradores, corSecundaria }) => {
  console.log("arrai com a lista=", colaboradores);
  function onClick() {
    criarSorteio(colaboradores);
    console.log("cliquei");
  }

  return (
    <div className="participantes">
      
      <div className="btn-sorte">
      <h3 style={{ borderColor: corSecundaria }}>
        {colaboradores.nome}Sorteio
      </h3>
        <Botao onClick={onClick} teste="Sortear"/>
      </div>
      <div className="colaboradores">
        {colaboradores.map((participante, indice) => {
          console.log(
            <Participante
              key={indice}
              colaborador={participante}
              corDeFundo={corSecundaria}
              aoDeletar={aoDeletar}
            />
          );
          return (
            <Participante
              key={indice}
              colaborador={participante}
              corDeFundo={corSecundaria}
              aoDeletar={aoDeletar}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Participantes;
