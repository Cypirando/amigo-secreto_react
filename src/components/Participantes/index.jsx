import Participante from "../Participante";
import "./Participantes.css";
import Botao from "../Botao";
import criarSorteio from "../../api";
import { useLocation, useNavigate } from "react-router-dom";
import Final from "../../pages/Final";


// import { v4 as uuidv4 } from "uuid";

const Participantes = ({ aoDeletar, colaboradores }) => {
  const location = useLocation();
  let navigate = useNavigate();

  console.log(colaboradores);
  function onClick() {
    criarSorteio(colaboradores, Final);
    navigate("/fim");
  }

  return (
    <div className="participantes">
      <div className="btn-sorte">
        <h3>{location.state?.nomeDoSorteio}</h3>
        <Botao onClick={onClick} texto="Sortear" />
      </div>
      <div className="colaboradores">
        {colaboradores.map((participante, indice) => {
          return (
            <Participante
              key={indice}
              colaborador={participante}
              aoDeletar={aoDeletar}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Participantes;
