import { useState } from "react";
import "./components/style/estilosGlobais.scss";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Participantes from "./components/Participantes";
import Rodape from "./components/rodape";
// import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Resultado from "./components/Resultado";

function AppRoutes() {
  const participantes = [
    {
      nome: "Participantes",
      corPrimaria: "#D9F7F9",
      corSecundaria: "#57c278",
    },
  ];


  const [colaboradores, setColaboradores] = useState([]);

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
    <BrowserRouter>
      <Banner />
      <Menu/>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
            
              <Formulario
                aoColaboradorCadastrado={(colaborador) =>
                  setColaboradores([...colaboradores, colaborador])
                }
              />
              
            </div>
          }
        />
        <Route
          path="/participantes"
          element={
            participantes.map((participante, indice) => (
            <Participantes
              key={indice}
              nome={participante.nome}
              corPrimaria={participante.corPrimaria}
              corSecundaria={participante.corSecundaria}
              colaboradores={colaboradores}
              aoDeletar={deletarColaborador}
            />
          ))}
        />
        <Route
          path="/resultado"
          element={
            <Resultado/>
          }
        />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
