import MensagenDeErro from "../MensagenDeErro";
import "./CampoTexto.css";

const CampoTexto = ({
  placeholder,
  aoAlterado,
  label,
  valor,
  obrigatorio,
  emailIvalido,
  emailRepetido,
  ...props
}) => {
  const placeholderModificada = `${placeholder}...`;

  return (
    <div className="teeste">
      <label>{label}</label>
      <input
        className={`campo-texto ${emailRepetido ? "erro" : ""}`}
        value={valor}
        onChange={(evento) => aoAlterado(evento.target.value)}
        {...props}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
      <MensagenDeErro erro={emailRepetido} mensagem="E-mail já cadastrado" />
      <MensagenDeErro erro={emailIvalido} mensagem="E-mail Invalido" />
    </div>
  );
};

export default CampoTexto;
