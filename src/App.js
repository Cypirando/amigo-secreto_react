import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Participantes from "./components/Participantes";

function App() {
  const participantes = [
    {
      nome: "Participantes",
      corPrimaria: "#D9F7F9",
      corSecundaria: "#57c278",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {participantes.map((participante) => (
        <Participantes
          key={participante.nome}
          nome={participante.nome}
          corPrimaria={participante.corPrimaria}
          corSecundaria={participante.corSecundaria}
          colaboradores={colaboradores}
        />
      ))}
    </div>
  );
}

export default App;
