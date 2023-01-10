import { MdPersonRemoveAlt1 } from "react-icons/md";
import "./Participante.css";

const Participante = ({colaborador,corDeFundo,aoDeletar}) => {
  console.log(colaborador)
  return (
    <div className="colaborador">
      <MdPersonRemoveAlt1
        size={25}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor:corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>

      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.email}</h5>
      </div>
    </div>
  );
};

export default Participante;
