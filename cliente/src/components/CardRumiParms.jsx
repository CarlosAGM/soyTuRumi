import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRumis } from "../context/RumiContext";
import { useAuth } from "../context/authContext";

function CardRumiParms({ rumi }) {
  const { eliminarRumi } = useRumis();
  const { user } = useAuth();
  const creadorPost = rumi.usuario._id;
  const userLog = user.id;
  const autor = creadorPost === userLog;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [mostrarCardGrande, setCardGrande] = useState(false);
  const handleCardClick = () => {
    setCardGrande(true);
  };

  const handleCloseClick = () => {
    setCardGrande(false);
  };

  return (
    <div>
      {mostrarCardGrande ? (
        <div className="bg-zinc-100 max-w-md w-full p-10 rounded-md">
          {rumi.imagen && <img src={rumi.imagen.url} alt="" />}
          <header className="flex w-full justify-between">
            <div className="flex">
              <h1 className="text-2xl font-bold pr-2">{rumi.usuario.nombre}</h1>
              <h1 className="text-2xl font-bold pr-2">
                {rumi.usuario.apellido}
              </h1>
            </div>
            {autor ? (
              <div className="relative inline-block text-right">
                <div
                  onClick={toggleMenu}
                  className="text-3xl cursor-pointer h-15"
                >
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
          <p className="text-black">{rumi.edad}</p>
          <p className="text-black">{rumi.mascotas}</p>
          <p className="text-black">{rumi.hijos}</p>
          <p className="text-black">{rumi.arriendo}</p>
          <p className="text-black">{rumi.region}</p>
          <p className="text-black">{rumi.ubicacion}</p>
          <p className="text-black">{rumi.celular}</p>
          <a
            href={`https://api.whatsapp.com/send?phone=569${rumi.celular}`}
            target="_blank"
          >
            <ion-icon name="logo-whatsapp" size="large"></ion-icon>
          </a>
          <p className="text-black">{rumi.infoExtra}</p>
          <button onClick={handleCloseClick}>Cerrar</button>
        </div>
      ) : (
        <div className="h-[350px] w-[350px] bg-gray-200 rounded-2xl">
          <div className="">
            {rumi.imagen && (
              <img
                src={rumi.imagen.url}
                alt=""
                className="rounded-t-2xl object-cover w-[350px] h-[210px]"
              />
            )}
          </div>
          <div className="flex">
            <div className="m-3">
              <h1 className="text-[20px] font-bold">
                Soy {rumi.usuario.nombre}
              </h1>
              <div className="flex gap-2 mt-2 items-center">
                <ion-icon
                  name="location"
                  size="small"
                  className="relative"
                ></ion-icon>
                <div>{rumi.region}</div>
              </div>
              <div className="flex gap-2 mt-2 items-center">
                <ion-icon name="school"></ion-icon>
                <div>{rumi.usuario.institucion}</div>
              </div>
            </div>
            <div className="flex items-center justify-center w-[175px]">
              <button
                onClick={handleCardClick}
                className="flex bg-green-400 h-14 w-32 rounded-full text-green-900 font-bold items-center justify-center"
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardRumiParms;
