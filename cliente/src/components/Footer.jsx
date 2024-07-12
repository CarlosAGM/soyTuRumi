import React from "react";
import logoCFT from "../assets/logoCFT.png";
function Footer() {
  return (
    <footer className="flex justify-center items-center md:h-[300px] w-full">
      <div className="flex flex-col md:flex-row md:justify-around items-center m-14">
        <a
          href="https://tecnologicovalparaiso.cl/"
          target="_blank"
          className="md:w-1/4 md:object-contain w-[300px]"
        >
          <img src={logoCFT} alt="logoCFT" />
        </a>

        <div className="flex flex-col gap-3">
          <a href="/" className="text-4xl">
            Inicio
          </a>
          <a href="/" className="text-xl">
            Rumis
          </a>
          <a href="/registro" className="text-xl">
            Registrate
          </a>
          <a href="/login" className="text-xl">
            Inicia Sesión
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl">Ayuda</h2>
          <a href="#" className="text-xl">
            Quienes Somos
          </a>
          <a href="#" className="text-xl">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
