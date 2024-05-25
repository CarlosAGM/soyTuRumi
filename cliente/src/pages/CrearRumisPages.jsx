import { useForm } from "react-hook-form";
import { useRumis } from "../context/RumiContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
function CrearRumisPages() {
  const { register, handleSubmit, setValue } = useForm();
  const { crearRumi, obtenerRumi, actualizarRumi } = useRumis();
  const navegar = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function cargaRumi() {
      if (params.id) {
        const rumi = await obtenerRumi(params.id);

        setValue("nombre", rumi.nombre);
        setValue("edad", rumi.edad);
      }
    }
    cargaRumi();
  }, []);

  const alEnviar = handleSubmit((data) => {
    if (params.id) {
      actualizarRumi(params.id, data);
    } else {
      crearRumi(data);
    }
    navegar("/rumis");
  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={alEnviar}>
        <input
          type="text"
          placeholder="Nombre"
          {...register("nombre")}
          autoFocus
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="text"
          placeholder="Edad"
          {...register("edad")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="text"
          placeholder="Genero"
          {...register("genero")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="text"
          placeholder="Institución"
          {...register("institucion")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="text"
          placeholder="Mascotas"
          {...register("mascotas")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="text"
          placeholder="Hijos"
          {...register("hijos")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="text"
          placeholder="Arriendo"
          {...register("arriendo")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="text"
          placeholder="Ubicación"
          {...register("ubicacion")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="text"
          placeholder="Celular"
          {...register("celular")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <textarea
          rows="3"
          placeholder="Información extra..."
          {...register("infoExtra")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <input
          type="text"
          placeholder="Img 1"
          {...register("image1")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded- my-2"
        />
        <input
          type="text"
          placeholder="Img 2"
          {...register("image2")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded- my-2"
        />
        <input
          type="text"
          placeholder="Img 3"
          {...register("image3")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded- my-2"
        />
        <input
          type="text"
          placeholder="Img 4"
          {...register("image4")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded- my-2"
        />
        <button>Publicar</button>
      </form>
    </div>
  );
}

export default CrearRumisPages;
