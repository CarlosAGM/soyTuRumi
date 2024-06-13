import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRumis } from "../context/RumiContext";
import logoColor from "../assets/logoColor.png";

function CrearRumisPages() {
  const { register, handleSubmit, setValue } = useForm(); // Importa funciones de useForm
  const { crearRumi, obtenerRumi, actualizarRumi } = useRumis(); // Importa funciones de useRumis

  const navegar = useNavigate(); // Variable para la navegación
  const params = useParams(); // Variable para obtener los parámetros de la URL

  useEffect(() => {
    //Funcion para actualizar el Rumi
    async function cargaRumi() {
      if (params.id) {
        // Si hay un ID en los parámetros, carga el Rumi correspondiente
        const rumi = await obtenerRumi(params.id); // Obtiene el Rumi desde el servicio
        setValue("edad", rumi.edad); // Asigna los valores obtenidos a los campos del formulario
        setValue("genero", rumi.genero);
        setValue("mascotas", rumi.mascotas);
        setValue("hijos", rumi.hijos);
        setValue("arriendo", rumi.arriendo);
        setValue("ubicacion", rumi.region);
        setValue("ubicacion", rumi.ubicacion); // Se sobrescribe, asegúrate que es intencional
        setValue("celular", rumi.celular);
        setValue("infoExtra", rumi.infoExtra);
        setValue("imagen", rumi.imagen);
      }
    }
    cargaRumi(); // Llama a la función de carga del Rumi al montar el componente
  }, []);

  const alEnviar = handleSubmit((data) => {
    // Manejo para el envío del formulario
    if (params.id) {
      // Si hay un ID en los parámetros, actualiza el Rumi
      actualizarRumi(params.id, data);
    } else {
      // De lo contrario, crea un nuevo Rumi
      crearRumi(data);
    }
    navegar("/"); // Navega de vuelta a la página principal después de enviar el formulario
  });
  return (
    <div className="flex items-center justify-center">
      <div className="border-solid border-4 border-verdeOriginal p-10 rounded-md mt-[20px] w-3/4 ">
        <div className="flex w-full justify-center">
          <img src={logoColor} alt="" className="h-20" />
        </div>
        <h1 className="text-2xl text-verdeOriginal font-bold text-center">
          Crea tu Rumi
        </h1>

        <form
          onSubmit={alEnviar}
          className="flex flex-col items-center justify-center"
        >
          <input
            type="text"
            placeholder="Edad"
            {...register("edad")}
            className="w-full border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md my-2"
          />
          <select
            {...register("genero")}
            defaultValue={"defecto"}
            className="border-4 border-verdeOriginal p-2 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-verdeOriginal"
          >
            <option value="defecto" disabled>
              Genero
            </option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
          <input
            type="text"
            placeholder="Mascotas"
            {...register("mascotas")}
            className="w-full border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md my-2"
          />
          <input
            type="text"
            placeholder="Hijos"
            {...register("hijos")}
            className="w-full border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md my-2"
          />
          <input
            type="text"
            placeholder="Arriendo"
            {...register("arriendo")}
            className="w-full border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md my-2"
          />
          <select
            {...register("region")}
            defaultValue={"region"}
            className="border-4 border-verdeOriginal p-2 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-verdeOriginal"
          >
            <option value="region" disabled>
              Seleccione región
            </option>
            <option value="Arica y Parinacota">XV. Arica y Parinacota</option>
            <option value="Tarapacá">I. Tarapacá</option>
            <option value="Antofagasta">II. Antofagasta</option>
            <option value="Atacama">III. Atacama</option>
            <option value="Coquimbo">IV. Coquimbo</option>
            <option value="Valparaíso">V. Valparaíso</option>
            <option value="Metropolitana">RM. Metropolitana</option>
            <option value="O'Higgins">VI. O'Higgins</option>
            <option value="Maule">VII. Maule</option>
            <option value="Bío Bío">VIII. Bío Bío</option>
            <option value="Araucanía">IX. Araucanía</option>
            <option value="Los Ríos">XIV. Los Ríos</option>
            <option value="Los Lagos">X. Los Lagos</option>
            <option value="Aysén">XI. Aysén</option>
            <option value="Magallanes">XII. Magallanes</option>
          </select>
          <input
            type="text"
            placeholder="Dirección"
            {...register("ubicacion")}
            className="w-full border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md my-2"
          />
          <input
            type="text"
            placeholder="Celular"
            {...register("celular")}
            className="w-full border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md my-2"
          />
          <textarea
            rows="3"
            placeholder="Información extra..."
            {...register("infoExtra")}
            className="w-full border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md my-2"
          />

          <input
            type="file"
            className="w-full border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md my-2"
            onChange={(e) => setValue("imagen", e.target.files[0])}
          />

          <button
            type="submit"
            className="rounded-full bg-verdeOriginal px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-teal-500 active:bg-blue-700"
          >
            Publicar
          </button>
        </form>
      </div>
    </div>
  );
}

export default CrearRumisPages;
