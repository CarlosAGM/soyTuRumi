import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

import RegistroPage from "./pages/RegistroPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Principal</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<RegistroPage />} />
          <Route path="/rumis" element={<h1>Rumis</h1>} />
          <Route path="/crearRumi" element={<h1>Crear Rumi</h1>} />
          <Route path="/actualizarRumi" element={<h1>Actualizar Rumi</h1>} />
          <Route path="/perfil" element={<h1>Perfil</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
