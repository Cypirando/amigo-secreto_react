import Participante from "../Participante";
import "./Participantes.css";

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
        {props.colaboradores.map((participante) => (
          <Participante
            key={participante.nome}
            nome={participante.nome}
            email={participante.email}
            corDeFundo={participante.corSecundaria}
            aoDeletar={props.aoDeletar}

          />
        ))}
      </div>
    </section>
  );
};

export default Participantes;
