import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Participantes from "./components/Participantes";
import Rodape from "./components/rodape";
import { v4 as uuidv4 } from "uuid";

function App() {
  const participantes = [
    {
      nome: "Participantes",
      corPrimaria: "#D9F7F9",
      corSecundaria: "#57c278",
    },
  ];

  const inicial = [
    {
      id: uuidv4(),
      nome: "JULIANA AMOASEI",
      email: "julinan@gmail.com",
      presnte: "Bola",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  function deletarColaborador(id) {
    console.log(id);
    setColaboradores(
      colaboradores.filter((colaborador) => {
        console.log(colaborador.id);
        return colaborador.id !== id;
      })
    );
    console.log(colaboradores);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          setColaboradores([...colaboradores, colaborador])
        }
      />
      {participantes.map((participante,indice) => (
        <Participantes
          key={indice}
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
