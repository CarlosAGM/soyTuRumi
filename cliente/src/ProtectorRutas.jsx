import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext";

function ProtectorRutas() {
  const { loading, esAutenticado } = useAuth();
  console.log(loading, esAutenticado);
  if (loading) return <h1>Cargando...</h1>;
  if (!loading && !esAutenticado) return <Navigate to="/login" replace />;
  return <Outlet />;
}

export default ProtectorRutas;
