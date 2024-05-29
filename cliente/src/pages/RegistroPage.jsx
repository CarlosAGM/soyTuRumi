import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
function RegistroPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, esAutenticado, errors: registroError } = useAuth();
  const navegar = useNavigate();

  useEffect(() => {
    if (esAutenticado) navegar("/rumis");
  }, [esAutenticado]);

  const alEnviar = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {registroError.map((error, i) => (
          <div className="text-red-500" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold text-center">Crea tu cuenta</h1>
        <form onSubmit={alEnviar}>
          <input
            type="text"
            {...register("nombre", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Nombre"
          />
          {errors.nombre && <p className="text-red-500">Nombre requerido</p>}

          <input
            type="text"
            {...register("apellido", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Apellido"
          />
          {errors.apellido && (
            <p className="text-red-500">Apellido requerido</p>
          )}

          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email requerido</p>}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className="text-red-500">Contraseña requerida</p>
          )}

          <input
            type="text"
            {...register("institucion", { required: false })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Institucion"
          />
          <button
            type="submit"
            className="rounded-full bg-blue-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700"
          >
            Crear
          </button>
        </form>
        <p className="flex gap-x-2">
          Ingresa con tu cuenta
          <Link to="/login" className="text-sky-500">
            Aquí
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegistroPage;
