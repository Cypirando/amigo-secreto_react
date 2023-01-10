import Participante from "../Participante";
import "./Participantes.css";
import { v4 as uuidv4 } from 'uuid';


const Participantes = (props) => {
  return (
    <section
      className="participantes"
      style={{
        backgroundImage: "url(/images/fundo.png)",
        backgroundColor: props.corPrimaria,
      }}
      
    >
      <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((participante,indice) => (
          
          <Participante
            id={uuidv4()}
            key={indice}
            nome={participante.nome}
            email={participante.email}
            colaborador={participante}
            corDeFundo={props.corSecundaria}
            aoDeletar={props.aoDeletar}

          />
        ))}
      </div>
    </section>
  );
};

export default Participantes;
