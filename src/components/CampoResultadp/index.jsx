import "./CampoResultado.css";

const CampoResultado = (props) => {
  return (
    <div>
      <p className="resposta">{props.children}</p>
    </div>
  );
};

export default CampoResultado;
