import { Route, Routes, BrowserRouter } from "react-router-dom";
import TelaPrincipal from "./Componentes/Telas/TelaPrincipal";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import DetalhesCandidato from "./Componentes/Telas/DetalhesCandidato";
import TelaDetalhar from "../src/Componentes/Telas/TelaDetalhar"
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaPrincipal />} />
                <Route path="/propostas" element={<TelaDetalhar/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
