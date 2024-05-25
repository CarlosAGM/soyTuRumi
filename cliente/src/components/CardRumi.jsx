import { Link } from "react-router-dom";
import { useRumis } from "../context/RumiContext";
import { useAuth } from "../context/authContext";

function CardRumi({ rumi }) {
  const { eliminarRumi } = useRumis();
  const { user } = useAuth();
  const creadorPost = rumi.usuario;
  const userLog = user.id;
  const autor = creadorPost === userLog;

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{rumi.nombre}</h1>
        <div className="flex gap-x-2 items-center">
          {autor ? (
            <>
              <button
                className="bg-indigo-500 px-4 py-1 rounded-md my-2 disabled:bg-indigo-300"
                onClick={() => eliminarRumi(rumi._id)}
              >
                Eliminar
              </button>

              <Link
                className="bg-indigo-500 px-4 py-1 rounded-md"
                to={`/rumis/${rumi._id}`}
              >
                Editar
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
      </header>
      <p className="text-slate-300">{rumi.edad}</p>
    </div>
  );
}

export default CardRumi;
