import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function perfilPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { actualizarUser, borrarUser, obtenerUser, user } = useAuth();
  const navegar = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function cargaUser() {
      if (params.id) {
        console.log(params.id);
        const usuario = await obtenerUser(params.id);
        setValue("nombre", usuario.nombre);
        setValue("apellido", usuario.apellido);
        setValue("email", usuario.email);
        setValue("institucion", usuario.institucion);
      }
    }
    cargaUser();
  }, []);

  const borrarUsuario = () => {
    borrarUser(user.id);
    navegar("/");
  };

  const alEnviar = handleSubmit((data) => {
    actualizarUser(params.id, data);
    navegar("/");
  });

  return (
    <div className="flex items-center justify-center">
      <div className="border-solid border-4 border-verdeOriginal p-10 rounded-md mt-[20px] w-3/4 ">
        <h1 className="text-2xl text-verdeOriginal font-bold text-center">
          Perfil
        </h1>
        <form
          onSubmit={alEnviar}
          className="flex flex-col items-center justify-center"
        >
          <input
            type="text"
            placeholder="Nombre"
            {...register("nombre")}
            className="w-full border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md my-2"
          />

          <input
            type="text"
            placeholder="Apellido"
            {...register("apellido")}
            className="w-full border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md my-2"
          />
          <input
            type="text"
            placeholder="Email"
            {...register("email")}
            className="w-full border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md my-2"
          />

          <input
            type="text"
            placeholder="Institución"
            {...register("institucion")}
            className="w-full border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md my-2"
          />

          <button
            type="submit"
            className="rounded-full bg-verdeOriginal px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-teal-500 active:bg-blue-700"
          >
            Actualizar
          </button>
          <button
            onClick={borrarUsuario}
            className="rounded-full bg-red-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-red-700"
          >
            Eliminar
          </button>
        </form>
      </div>
    </div>
  );
}

export default perfilPage;
