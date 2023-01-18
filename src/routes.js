import { useState } from "react";
import "./components/style/estilosGlobais.scss";
import Banner from "./components/Banner";
import Formulario from "./pages/Formulario";
import Participantes from "./components/Participantes";
import Rodape from "./components/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Resultado from "./components/Resultado";
import Inicio from "./pages/Inicio";
import "./App.css";
import Final from "./pages/Final";
import NaoEncontrada from "./pages/NaoEncontrada";

function AppRoutes() {
  const [colaboradores, setColaboradores] = useState([]);

  function deletarColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => {
        return colaborador.id !== id;
      })
    );
  }

  const [grupos, setGrupos] = useState("");

  return (
    <BrowserRouter>
      <Banner />
      <Menu grupo={grupos} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Inicio aoSalvarNomeGrupo={(grupo) => setGrupos(grupo)} />
            </div>
          }
        />

        <Route
          path="/formulario"
          element={
            <div className="App">
              <Formulario
                colaboradores={colaboradores}
                aoColaboradorCadastrado={(colaborador) => {
                  setColaboradores([...colaboradores, colaborador]);
                  console.log("teste", colaboradores);
                }}
              />

              <Participantes
                colaboradores={colaboradores}
                nomeSorteio={grupos}
                aoDeletar={deletarColaborador}
              />
            </div>
          }
        />
        <Route path="/fim" element={<Final />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="*" element={<NaoEncontrada />}></Route>
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
