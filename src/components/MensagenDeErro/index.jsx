import "./MensagenDeErro.css";

const MensagenDeErro = ({ erro, mensagem }) => {
  return (
    <div>
      {erro && <div className="mensagem-erro">{mensagem}</div>}
    </div>
  );
};

export default MensagenDeErro;
