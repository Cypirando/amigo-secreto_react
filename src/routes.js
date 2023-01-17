import { useState } from "react";
import "./components/style/estilosGlobais.scss";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Participantes from "./components/Participantes";
import Rodape from "./components/rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Resultado from "./components/Resultado";
import Inicio from "./components/Inicio";
import "./App.css";

function AppRoutes() {
  const [colaboradores, setColaboradores] = useState([]);

  function deletarColaborador(id) {
    // console.log(id);
    setColaboradores(
      colaboradores.filter((colaborador) => {
        // console.log(colaborador.id);
        return colaborador.id !== id;
      })
    );
    // console.log(colaboradores);
  }

  const [grupos, setGrupos] = useState("");

  // console.log(grupos);
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
                aoColaboradorCadastrado={(colaborador) =>
                  setColaboradores([...colaboradores, colaborador])
                }
              />

              <Participantes
                colaboradores={colaboradores}
                nomeSorteio={grupos}
                aoDeletar={deletarColaborador}
              />
            </div>
          }
        />
        <Route path="/participantes" element={"testeeee"} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
