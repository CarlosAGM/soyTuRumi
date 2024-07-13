import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { RumiProvider } from "./context/RumiContext";

import PaginaPrincipalPage from "./pages/PaginaPrincipalPage";
import LoginPage from "./pages/LoginPage";
import RegistroPage from "./pages/RegistroPage";
import RumisPage from "./pages/RumisPage";
import CrearRumisPages from "./pages/CrearRumisPages";
import DesarrolladoresPages from "./pages/DesarrolladoresPages";
import QuienesSomosPages from "./pages/QuienesSomosPages";

import PerfilPage from "./pages/PerfilPage";
import ProtectorRutas from "./ProtectorRutas";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <RumiProvider>
        <BrowserRouter>
          <Navbar />
          <main className="h-full">
            <Routes>
              <Route path="/" element={<PaginaPrincipalPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/registro" element={<RegistroPage />} />
              <Route path="/quienessomos" element={<QuienesSomosPages />} />
              <Route
                path="/desarrolladores"
                element={<DesarrolladoresPages />}
              />
              <Route element={<ProtectorRutas />}>
                <Route path="/Rumis" element={<RumisPage />} />
                <Route path="/crearRumi" element={<CrearRumisPages />} />
                <Route path="/Rumis/:id" element={<CrearRumisPages />} />
                <Route path="/perfil/:id" element={<PerfilPage />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </RumiProvider>
    </AuthProvider>
  );
}

export default App;
