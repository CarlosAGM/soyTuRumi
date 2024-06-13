import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import logoNav from "../assets/logoColor.png";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
      estilo: "text-gray-800 hover:text-gray-400 duration-500 mr-20",
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

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-verdeOriginal px-3 py-2 text-lg font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-teal-500">
                  {user.nombre}
                  <ChevronDownIcon
                    className="-mr-1 h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute md:right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="/crearRumi"
                          className={classNames(
                            focus
                              ? "bg-green-300 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          ➕ Crea tu Rumi
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href={`/perfil/${user.id}`}
                          className={classNames(
                            focus
                              ? "bg-blue-300 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          🧒🏻 Perfil de {user.nombre}
                        </a>
                      )}
                    </MenuItem>

                    <MenuItem>
                      {({ focus }) => (
                        <button
                          onClick={() => logout()}
                          href="/"
                          className={classNames(
                            focus
                              ? "bg-red-300 text-gray-900"
                              : "text-gray-700",
                            "block w-full px-4 py-2 text-left text-sm"
                          )}
                        >
                          🔒 Cierre Sesión
                        </button>
                      )}
                    </MenuItem>
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
