import { useState } from "react";
import "./MensagenDeErro.css";

const MensagenDeErro = ({ message }) => {
  const [names, setNames] = useState([]); // array vazio para armazenar nomes já usados
  const [inputError, setInputError] = useState(false); // estado para controlar a classe css

  function handleAddName(name) {
    if (names.includes(name)) {
      setInputError(true); //aplica a classe css
      alert("Name already used! Please choose a different name.");
    } else {
      setNames([...names, name]);
      setInputError(false); // remove a classe css
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a name"
        className={inputError ? "input-error" : ""} // condicional para aplicar a classe css
        onChange={(e) => handleAddName(e.target.value)}
      />
    </div>
  );
};

export default MensagenDeErro;
