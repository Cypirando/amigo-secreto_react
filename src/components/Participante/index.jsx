import { MdPersonRemoveAlt1 } from "react-icons/md";
import "./Participante.css";

const Participante = ({ colaborador, corDeFundo, aoDeletar }) => {
  return (
    <div className="colaborador">
      <MdPersonRemoveAlt1
        size={25}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
       
      </div>

      <div className="rodape">
        <p>{colaborador.nome}</p>
        <small>{colaborador.email}</small>
      </div>
    </div>
  );
};

export default Participante;
