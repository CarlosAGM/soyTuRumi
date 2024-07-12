import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function perfilPage() {
  const { register, handleSubmit, setValue } = useForm(); // Importa funciones de useForm
  const { actualizarUser, borrarUser, obtenerUser, user } = useAuth(); // Importa funciones de useAuth
  const navegar = useNavigate(); // Variables para la navegación
  const params = useParams(); // Variables para obtener los parámetros de la URL

  useEffect(() => {
    // Se ejecuta cuando el componente se carga para la actualizacion del usuario
    async function cargaUser() {
      if (params.id) {
        // Verifica si hay un ID en los parámetros
        const usuario = await obtenerUser(params.id); // Obtiene el usuario con el ID proporcionado
        // Asigna los valores del usuario a los campos del formulario utilizando setValue
        setValue("nombre", usuario.nombre);
        setValue("apellido", usuario.apellido);
        setValue("email", usuario.email);
        setValue("institucion", usuario.institucion);
      }
    }
    cargaUser(); // Llama a la función cargaUser al cargar el componente
  }, []);

  // Función para borrar el usuario actual
  const borrarUsuario = () => {
    borrarUser(user.id); // Llama a la función borrarUser y le pasa el id del usuario
    navegar("/"); // Navega de vuelta a la página principal
  };

  // Función que se ejecuta al enviar el formulario
  const alEnviar = handleSubmit((data) => {
    actualizarUser(params.id, data); // Llama a la función actualizarUser le entrega el id usuario y los datos ingesado
    navegar("/"); // Navega de vuelta a la página principal
  });
  return (
    <div className="flex items-center justify-center">
      <div className="p-10 rounded-md mt-[20px] w-3/4 ">
        <h1 className="text-4xl text-verdeOriginal font-bold text-center">
          ✍🏻 Perfil
        </h1>
        <form
          onSubmit={alEnviar}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex gap-4 mt-10">
            <div className="grid place-items-center">
              <p className="text-2xl text-verdeOriginal font-bold text-center">
                Nombre
              </p>
              <input
                type="text"
                placeholder="Nombre"
                {...register("nombre")}
                className="w-[200px] border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md my-2"
              />
            </div>
            <div className="grid place-items-center">
              <p className="text-2xl text-verdeOriginal font-bold text-center">
                Apellido
              </p>
              <input
                type="text"
                placeholder="Apellido"
                {...register("apellido")}
                className="w-[200px] border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md my-2"
              />
            </div>
          </div>
          <div className="grid place-items-center">
            <p className="text-2xl text-verdeOriginal font-bold text-center">
              📧 Email
            </p>
            <input
              type="text"
              placeholder="Email"
              {...register("email")}
              className="w-[416px] border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md my-2"
            />
          </div>

          <div className="grid place-items-center">
            <p className="text-2xl text-verdeOriginal font-bold text-center">
              🏛️ Universidad
            </p>
            <input
              type="text"
              placeholder="Institución"
              {...register("institucion")}
              className="w-[416px] border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md my-2"
            />
          </div>

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
