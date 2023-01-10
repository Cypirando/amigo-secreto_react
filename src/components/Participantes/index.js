import Participante from "../Participante";
import "./Participantes.css";
// import { v4 as uuidv4 } from "uuid";

const Participantes = ({aoDeletar,colaboradores,corPrimaria,corSecundaria}) => {
  console.log(colaboradores)
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
      </div>
    </section>
  );
};

export default Participantes;
