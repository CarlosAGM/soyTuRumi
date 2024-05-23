import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

import PaginaPrincipalPage from "./pages/PaginaPrincipalPage";
import LoginPage from "./pages/LoginPage";
import RegistroPage from "./pages/RegistroPage";
import RumisPage from "./pages/RumisPage";
import CrearRumisPage from "./pages/CrearRumisPage";
import ActualizarRumisPage from "./pages/ActualizarRumisPage";
import PerfilPage from "./pages/PerfilPage";
import ProtectorRutas from "./ProtectorRutas";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaPrincipalPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<RegistroPage />} />
          <Route path="/rumis" element={<RumisPage />} />
          <Route element={<ProtectorRutas />}>
            <Route path="/crearRumi" element={<CrearRumisPage />} />
            <Route path="/actualizarRumi" element={<ActualizarRumisPage />} />
            <Route path="/perfil" element={<PerfilPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
