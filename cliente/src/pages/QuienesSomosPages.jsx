import React from "react";
import logoBlanco from "../assets/logoBlanco.png";
function QuienesSomosPages() {
  return (
    <div className="m-10">
      <div className="flex bg-[url('/src/assets/banner.jpg')] bg-cover w-12/12 h-[500px] rounded-3xl justify-center items-center mt-5">
        <img src={logoBlanco} alt="logoApp" />
      </div>
      <div className="md:flex gap-[60px]">
        <div className="flex flex-col items-center">
          <h1 className="font-bold md:text-6xl text-4xl text-verdeOriginal m-10">
            Misión 🎯
          </h1>
          <p className="italic text-2xl text-center">
            "Facilitar conexiones seguras entre universitarios que buscan
            compartir un arriendo, promoviendo la convivencia armoniosa y el
            bienestar mutuo."
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold md:text-6xl text-4xl text-verdeOriginal m-10">
            Visión 🚀
          </h1>
          <p className="italic text-2xl text-center">
            "Ser una plataforma líder y reconocida por conectar de manera
            eficiente y confiable a universitarios en busca de un arriendo,
            creando una comunidad."
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bold md:text-6xl text-4xl text-verdeOriginal m-10">
          Valores ⛓️
        </h1>
        <div className="md:w-[800px] text-justify">
          <p className="italic text-2xl mb-5 ">
            <b>Respeto:</b> Valoramos la diversidad y tratamos a todos con
            dignidad y respeto.
          </p>
          <p className="italic text-2xl mb-5 ">
            <b>Confianza:</b> Construimos relaciones basadas en la confianza
            mutua y la responsabilidad compartida.
          </p>
          <p className="italic text-2xl mb-5 ">
            <b>Innovación:</b> Buscamos continuamente nuevas formas de mejorar y
            adaptarnos para satisfacer las necesidades cambiantes de nuestros
            universitarios.
          </p>
          <p className="italic text-2xl mb-5 ">
            <b>Comunidad:</b> Fomentamos el bienestar de nuestros estudiantes,
            promoviendo la creación de amistad saludables y solidarias.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuienesSomosPages;
