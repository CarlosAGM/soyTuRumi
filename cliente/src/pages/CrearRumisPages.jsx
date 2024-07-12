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
        setValue("region", rumi.region);
        setValue("ubicacion", rumi.ubicacion);
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
      <div className=" p-10 rounded-md mt-[20px] w-3/4 ">
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
          <div className="md:flex border-b-2 mt-10 border-verdeOriginal">
            <div className="flex flex-col justify-center items-center w-[200px]">
              <p className="font-bold">Información</p>
              <p className="">Personal</p>
            </div>

            <div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Edad"
                  {...register("edad")}
                  className="w-[180px] border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md m-2"
                />
                <select
                  {...register("genero")}
                  defaultValue={"defecto"}
                  className="w-[180px] border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md m-2"
                >
                  <option value="defecto" disabled>
                    Sexo
                  </option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Nacionalidad"
                  {...register("ubicacion")}
                  className="w-[180px] border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md m-2"
                />
                <input
                  type="text"
                  placeholder="Hijos"
                  {...register("hijos")}
                  className="w-[180px] border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md m-2"
                />
              </div>
              <div className="flex mb-10">
                <input
                  type="text"
                  placeholder="+569"
                  {...register("celular")}
                  className="w-[180px] border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md m-2"
                />
                <input
                  type="text"
                  placeholder="Mascotas"
                  {...register("mascotas")}
                  className="w-[180px] border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md m-2"
                />
              </div>
            </div>
          </div>
          <div className="md:flex mt-10 border-b-2 border-verdeOriginal">
            <div className="flex flex-col justify-center items-center w-[200px]">
              <p className="font-bold">Arriendo</p>
              <p className="">Deseado</p>
            </div>

            <div>
              <div className="flex mb-10">
                <select
                  {...register("region")}
                  defaultValue={"region"}
                  className="w-[180px] border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md m-2"
                >
                  <option value="region" disabled>
                    Región
                  </option>
                  <option value="Arica y Parinacota">
                    XV. Arica y Parinacota
                  </option>
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
                  placeholder="Ej. 100.000"
                  {...register("arriendo")}
                  className="w-[180px] border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md m-2"
                />
              </div>
            </div>
          </div>
          <div className="md:flex mt-10">
            <div className="flex flex-col justify-center items-center w-[200px]">
              <p className="font-bold">Extra</p>
            </div>
            <div className="flex">
              <textarea
                rows="3"
                placeholder="Información extra..."
                {...register("infoExtra")}
                className="w-[180px] h-[120px] border-solid border-4 border-verdeOriginal px-4 py-2 rounded-md m-2"
              />

              <div className="w-[180px] h-[120px] px-4 py-2 rounded-md m-2 bg-verdeOriginal">
                <label
                  htmlFor="inputFile"
                  className="flex flex-col justify-center items-center w-full h-full cursor-pointer bg-verdeOriginal"
                >
                  <p className="text-white">Sube tu Foto</p>
                  <ion-icon
                    name="add-circle-outline"
                    size="large"
                    class="text-white"
                  ></ion-icon>
                  <input
                    id="inputFile"
                    type="file"
                    className="hidden"
                    onChange={(e) => setValue("imagen", e.target.files[0])}
                  />
                </label>
              </div>
            </div>
          </div>

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
