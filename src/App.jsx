import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Materias from "./pages/Materias";
import Questoes from "./pages/Questoes";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                
                <Route
                    path="/"
                    element={<Home />}
                />

                
                <Route
                    path="/materias"
                    element={<Materias />}
                />

                
                <Route
                    path="/questoes/:materia"
                    element={<Questoes />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;