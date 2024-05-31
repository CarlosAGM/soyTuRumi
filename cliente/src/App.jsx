import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { RumiProvider } from "./context/RumiContext";

import PaginaPrincipalPage from "./pages/PaginaPrincipalPage";
import LoginPage from "./pages/LoginPage";
import RegistroPage from "./pages/RegistroPage";
import RumisPage from "./pages/RumisPage";
import CrearRumisPages from "./pages/CrearRumisPages";

import PerfilPage from "./pages/PerfilPage";
import ProtectorRutas from "./ProtectorRutas";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <RumiProvider>
        <BrowserRouter>
          <main className="h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<PaginaPrincipalPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/registro" element={<RegistroPage />} />
              <Route element={<ProtectorRutas />}>
                <Route path="/Rumis" element={<RumisPage />} />
                <Route path="/crearRumi" element={<CrearRumisPages />} />
                <Route path="/Rumis/:id" element={<CrearRumisPages />} />
                <Route path="/perfil" element={<PerfilPage />} />
              </Route>
            </Routes>
            <Footer />
          </main>
        </BrowserRouter>
      </RumiProvider>
    </AuthProvider>
  );
}

export default App;
