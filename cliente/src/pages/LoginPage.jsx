import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, esAutenticado } = useAuth();
  const navegar = useNavigate();
  const alEnviar = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (esAutenticado) navegar("/rumis");
  }, [esAutenticado]);

  return (
    <div className="m-auto flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-verdeOriginal max-w-md w-full p-10 rounded-md">
        {signinErrors.map((error, i) => (
          <div className="text-red-500" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold text-center">Inicio de Sesión</h1>
        <form onSubmit={alEnviar}>
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

          <button
            type="submit"
            className="rounded-full bg-blue-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700"
          >
            Iniciar
          </button>
        </form>
        <p className="flex gap-x-2">
          Crea tu cuenta
          <Link to="/registro" className="text-sky-500">
            Aquí
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
