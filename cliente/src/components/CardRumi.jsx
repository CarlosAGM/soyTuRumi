import { Link } from "react-router-dom";
import { useRumis } from "../context/RumiContext";
import { useAuth } from "../context/authContext";

function CardRumi({ rumi }) {
  const { eliminarRumi } = useRumis();
  const { user } = useAuth();
  const creadorPost = rumi.usuario._id;
  const userLog = user.id;
  const autor = creadorPost === userLog;
  console.log(rumi.usuario._id);
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold pr-2">{rumi.usuario.nombre}</h1>
        <h1 className="text-2xl font-bold pr-2">{rumi.usuario.apellido}</h1>
        <div className="flex gap-x-2 items-center">
          {autor ? (
            <>
              <div>
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
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </header>
      <p className="text-slate-300">{rumi.edad}</p>
      <p className="text-slate-300">{rumi.genero}</p>
      <p className="text-slate-300">{rumi.mascotas}</p>
      <p className="text-slate-300">{rumi.hijos}</p>
      <p className="text-slate-300">{rumi.arriendo}</p>
      <p className="text-slate-300">{rumi.ubicacion}</p>
      <p className="text-slate-300">{rumi.celular}</p>
      <p className="text-slate-300">{rumi.imagen}</p>
    </div>
  );
}

export default CardRumi;
