import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import grupStudent from "../assets/grupStudent.png";
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
    <div className="flex flex-col mt-[30px] md:flex-row items-center justify-center">
      <div className="border-4 border-verdeOriginal max-w-md h-full rounded-md">
        <img src={grupStudent} alt="" />
        <div className="p-10 h-full">
          {registroError.map((error, i) => (
            <div className="text-red-500" key={i}>
              {error}
            </div>
          ))}
          <div className=" text-white font-bold flex h-[40px] w-full my-3 rounded-2xl">
            <a
              href="/login"
              className="flex bg-verdeOriginal w-2/4 rounded-l-2xl items-center justify-center hover:bg-teal-500"
            >
              Inicio sesión
            </a>
            <a
              href="/registro"
              className="flex bg-verdeOriginal w-2/4 rounded-r-2xl items-center justify-center hover:bg-teal-500"
            >
              Regístrate
            </a>
          </div>
          <h1 className="text-verdeOriginal text-2xl font-bold text-center">
            Crea tu cuenta
          </h1>

          <form onSubmit={alEnviar}>
            <div className="flex gap-3 h-full">
              <input
                type="text"
                {...register("nombre", { required: true })}
                className="w-full border-verdeOriginal border-4  px-4 py-2 rounded-md my-2"
                placeholder="Nombre"
              />
              {errors.nombre && (
                <p className="text-red-500">Nombre requerido</p>
              )}

              <input
                type="text"
                {...register("apellido", { required: true })}
                className="w-full border-verdeOriginal border-4  px-4 py-2 rounded-md my-2"
                placeholder="Apellido"
              />
              {errors.apellido && (
                <p className="text-red-500">Apellido requerido</p>
              )}
            </div>

            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full border-verdeOriginal border-4  px-4 py-2 rounded-md my-2"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">Email requerido</p>}

            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full border-verdeOriginal border-4  px-4 py-2 rounded-md my-2"
              placeholder="Contraseña"
            />
            {errors.password && (
              <p className="text-red-500">Contraseña requerida</p>
            )}

            <input
              type="text"
              {...register("institucion", { required: false })}
              className="w-full border-verdeOriginal border-4  px-4 py-2 rounded-md my-2"
              placeholder="Institucion"
            />
            <button
              type="submit"
              className="rounded-full bg-verdeOriginal px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-teal-500 active:bg-verdeOriginal"
            >
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistroPage;
