import Participante from "../Participante";
import "./Participantes.css";
import Botao from "../Botao";
import criarSorteio from "../../api";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Erro from "../Erro";

const Participantes = ({ aoDeletar, colaboradores }) => {
  const [erro, setError] = useState();
  const location = useLocation();
  let navigate = useNavigate();

  console.log(colaboradores);

  async function onClick() {
    try {
      await criarSorteio(colaboradores);
      navigate("/fim");
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            setError(
              "Bad request: Por favor, verifique se todos os campos estão preenchidos corretamente."
            );
            break;
          case 401:
            setError(
              "Unauthorized: Não autorizado, verifique suas credenciais."
            );
            break;
          case 500:
            setError(
              "Internal Server Error: Ocorreu um erro no servidor, por favor, tente novamente mais tarde."
            );
            break;
          default:
            setError(`Erro: ${error.response.status}`);
            break;
        }
      } else {
        setError(
          "Ocorreu um erro com a chamada de API. Por favor, tente novamente mais tarde."
        );
      }
    }
  }

  return (
    <div className="participantes">
      {erro && <Erro message={erro} />}
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
