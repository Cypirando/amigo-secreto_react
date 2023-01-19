import Participante from "../Participante";
import "./Participantes.css";
import Botao from "../Botao";
import criarSorteio from "../../api";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Erro from "../Erro";

// import { v4 as uuidv4 } from "uuid";

const Participantes = ({ aoDeletar, colaboradores }) => {
  const [erro, setError] = useState();
  const location = useLocation();
  let navigate = useNavigate();

  console.log(colaboradores);
  
  // async function onClick() {
  //   try {
  //     await criarSorteio(colaboradores);
  //     navigate("/fim");
  //   } catch (error) {
  //     console.log("erro");
  //     if (error.response) {
  //       console.log(error.response.data);
  //       console.log(error.response.statusCode);
  //     setError(400)
  //     }else{
  //       console.log(erro)
  //     }
  //   }
  // }

  async function onClick() {
    try {
      await criarSorteio(colaboradores);
      navigate("/fim");
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            console.log("Bad request");
            break;
          case 401:
            console.log("Unauthorized");
            break;
          case 500:
            console.log("Internal Server Error");
            break;
          default:
            console.log(`Error: ${error.response.status}`);
            break;
        }
      }
      if (error.response) {
        setError(error.response.data);
      } else {
        setError("Ocorreu um erro com a chamada de API. Por favor, tente novamente mais tarde.");
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
