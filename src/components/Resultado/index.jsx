import Botao from "../Botao";
import CampoResultado from "../CampoResultado";
import Titulo from "../../components/Titulo";

import "./Resultado.css";

const Resultado = () => {
  let url_atual = window.location.href;
  let token = url_atual.slice(37);
  // console.log(token);
  let result;
  parseJwt(token);
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    result = JSON.parse(jsonPayload);
    return result;
  }
  // console.log(result.nome);

  return (
    <section className="resultado">
      <CampoResultado>Olá, seu amigo secreto é:</CampoResultado>

      <Titulo>{result.nome}</Titulo>
      <CampoResultado>O que voce desejaria ganhar?</CampoResultado>
      <Botao texto="Eu quero ganhar ..." />
    </section>
  );
};

export default Resultado;
