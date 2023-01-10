import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Participantes from "./components/Participantes";
import Rodape from "./components/rodape";

function App() {
  const participantes = [
    {
      nome: "Participantes",
      corPrimaria: "#D9F7F9",
      corSecundaria: "#57c278",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  function deletarColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
    console.log(setColaboradores);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          setColaboradores([...colaboradores, colaborador])
        }
      />
      {participantes.map((participante) => (
        <Participantes
          key={participante.nome}
          nome={participante.nome}
          corPrimaria={participante.corPrimaria}
          corSecundaria={participante.corSecundaria}
          colaboradores={colaboradores}
          aoDeletar={deletarColaborador}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
