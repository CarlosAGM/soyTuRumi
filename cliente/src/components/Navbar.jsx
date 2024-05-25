import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Navbar() {
  const { esAutenticado, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-bold">
        <Link to={esAutenticado ? "/rumis" : "/"}>Rumi</Link>
      </h1>
      <ul className="flex gap-x-2">
        {esAutenticado ? (
          <>
            <li className="text-2xl font-bold">Bienvenido {user.usuario}</li>
            <li>
              <Link
                className="bg-green-500 px-4 py-1 rounded-md"
                to="/crearRumi"
              >
                Haz tu Rumi
              </Link>
            </li>
            <li>
              <Link
                className="bg-red-500 px-4 py-1 rounded-md"
                to="/"
                onClick={() => logout()}
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="bg-indigo-500 px-4 py-1 rounded-md" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link
                className="bg-indigo-500 px-4 py-1 rounded-md"
                to="/registro"
              >
                Registro
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
