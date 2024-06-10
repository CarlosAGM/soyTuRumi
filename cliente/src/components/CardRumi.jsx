import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRumis } from "../context/RumiContext";
import { useAuth } from "../context/authContext";

function CardRumi({ rumi }) {
  const { eliminarRumi } = useRumis();
  const { user } = useAuth();
  const creadorPost = rumi.usuario._id;
  const userLog = user.id;
  const autor = creadorPost === userLog;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-zinc-100 max-w-md w-full p-10 rounded-md">
      {rumi.imagen && <img src={rumi.imagen.url} alt="" />}
      <header className="flex w-full justify-between">
        <div className="flex">
          <h1 className="text-2xl font-bold pr-2">{rumi.usuario.nombre}</h1>
          <h1 className="text-2xl font-bold pr-2">{rumi.usuario.apellido}</h1>
        </div>
        {autor ? (
          <div className="relative inline-block text-right">
            <div onClick={toggleMenu} className="text-3xl cursor-pointer h-15">
              <ion-icon
                name={isMenuOpen ? "close" : "settings-outline"}
              ></ion-icon>
            </div>
            {isMenuOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Link
                    to={`/rumis/${rumi._id}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-500 w-full text-center"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => eliminarRumi(rumi._id)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-500 w-full text-center"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
      </header>
      <p className="text-black">{JSON.stringify(rumi.edad)}</p>
      <p className="text-black">{JSON.stringify(rumi.mascotas)}</p>
      <p className="text-black">{JSON.stringify(rumi.hijos)}</p>
      <p className="text-black">{JSON.stringify(rumi.arriendo)}</p>
      <p className="text-black">{JSON.stringify(rumi.region)}</p>
      <p className="text-black">{JSON.stringify(rumi.ubicacion)}</p>
      <p className="text-black">{JSON.stringify(rumi.celular)}</p>
      <p className="text-black">{JSON.stringify(rumi.infoExtra)}</p>
    </div>
  );
}

export default CardRumi;
