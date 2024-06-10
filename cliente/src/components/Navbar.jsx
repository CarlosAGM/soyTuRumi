import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import logoNav from "../assets/logoColor.png";
function Navbar() {
  const { esAutenticado, logout, user } = useAuth();

  let LinksSinAuth = [
    {
      name: "Inicio",
      link: "/",
      estilo: "text-gray-800 hover:text-gray-400 duration-500",
    },
    {
      name: "Rumis",
      link: "/rumis",
      estilo: "text-gray-800 hover:text-gray-400 duration-500",
    },
    {
      name: "Quienes Somos",
      link: "#somos",
      estilo: "text-gray-800 hover:text-gray-400 duration-500",
    },
    {
      name: "Iniciar Sesión",
      link: "/login",
      estilo:
        "md:text-verdeOriginal font-[Poppins] md:py-2 md:px-6 md:rounded md:ml-8 duration-500 hover:text-green-400",
    },
    {
      name: "Regístrate",
      link: "/registro",
      estilo:
        "md:border-4 md:border-verdeOriginal text-verdeOriginal font-[Poppins] md:py-2 md:px-6 md:rounded md:ml-8 duration-500 hover:text-green-400",
    },
  ];
  let LinksConAuth = [
    {
      name: "Inicio",
      link: "/",
      estilo: "text-gray-800 hover:text-gray-400 duration-500",
    },
    {
      name: "Rumis",
      link: "/rumis",
      estilo: "text-gray-800 hover:text-gray-400 duration-500",
    },
    {
      name: "Quienes Somos",
      link: "#somos",
      estilo: "text-gray-800 hover:text-gray-400 duration-500",
    },
    {
      name: "Crea tu Rumi",
      link: "/crearRumi",
      estilo:
        "bg-green-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-green-400 duration-500",
    },
  ];

  let [open, setOpen] = useState(false);

  return (
    <nav className="shadow-md w-full sticky z-50 top-0 left-0">
      <div className="h-20 md:flex justify-between bg-white py-4 md:px-10 px-7">
        <Link to="/" className="w-2/6">
          <div
            className="font-bold text-2xl flex items-center font-[Poppins] 
      text-verdeOriginal"
          >
            <img src={logoNav} width={40} />
            Soy tu Rumi
          </div>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {!esAutenticado ? (
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {LinksSinAuth.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a href={link.link} className={link.estilo}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {LinksConAuth.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a href={link.link} className={link.estilo}>
                  {link.name}
                </a>
              </li>
            ))}

            <Link
              className="bg-blue-600 text-white w-16 h-16 rounded-full md:ml-8 hover:bg-blue-400 flex items-center justify-center"
              to={`/perfil/${user.id}`}
            >
              <ion-icon name="person-outline" size="large"></ion-icon>
            </Link>
            <Link
              className="bg-red-600 text-white w-16 h-16 rounded md:ml-8 hover:bg-red-400 flex items-center justify-center"
              to="/"
              onClick={() => logout()}
            >
              <ion-icon name="log-out-outline" size="large"></ion-icon>
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
