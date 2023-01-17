import "./CampoTexto.css";

const CampoTexto = ({placeholder, aoAlterado, label, valor, obrigatorio}) => {
  const placeholderModificada = `${placeholder}...`;
 

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
