import React from "react";
import logoBlanco from "../assets/logoBlanco.png";
function QuienesSomosPages() {
  return (
    <div className="m-10">
      <div className="flex bg-[url('/src/assets/banner.jpg')] bg-cover w-12/12 h-[500px] rounded-3xl justify-center items-center mt-5">
        <img src={logoBlanco} alt="logoApp" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-8xl text-verdeOriginal m-10">
          Misión 🎯
        </h1>
        <p className="italic text-4xl text-center">
          "Facilitar conexiones seguras entre universitarios que buscan
          compartir un arriendo, promoviendo la convivencia armoniosa y el
          bienestar mutuo."
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-8xl text-verdeOriginal m-10">
          Visión 🚀
        </h1>
        <p className="italic text-4xl text-center">
          "Ser la plataforma líder reconocida por conectar de manera eficiente y
          confiable a individuos en busca de compañeros de vivienda, creando
          comunidades colaborativas y sostenibles."
        </p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-8xl text-verdeOriginal m-10">
          Valores ⛓️
        </h1>
        <div>
          <p className="italic text-4xl mb-5 ">
            Respeto: Valoramos la diversidad y tratamos a todos con dignidad y
            respeto.
          </p>
          <p className="italic text-4xl mb-5 ">
            Confianza: Construimos relaciones basadas en la confianza mutua y la
            responsabilidad compartida.
          </p>
          <p className="italic text-4xl mb-5 ">
            Innovación: Buscamos continuamente nuevas formas de mejorar y
            adaptarnos para satisfacer las necesidades cambiantes de nuestros
            universitarios.
          </p>
          <p className="italic text-4xl mb-5 ">
            Comunidad: Fomentamos un sentido de pertenencia y colaboración entre
            nuestros estudiantes, promoviendo la creación de comunidades
            saludables y solidarias.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuienesSomosPages;
