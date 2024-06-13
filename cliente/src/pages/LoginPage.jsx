import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import grupStudent from "../assets/grupStudent.png";
import logoColor from "../assets/logoColor.png";
function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Importa funciones de useForm

  const { signin, errors: signinErrors, esAutenticado } = useAuth(); // Importa funciones de useAuth

  const navegar = useNavigate(); // Variable para la navegación

  const alEnviar = handleSubmit((data) => {
    // Manejador para el envío del formulario
    signin(data); // Llama a la función signin del hook useAuth con los datos del formulario
  });

  useEffect(() => {
    // Se ejecuta cuando el estado de autenticación cambia
    if (esAutenticado) {
      navegar("/rumis"); // Navega a la página de rumis si el usuario está autenticado
    }
  }, [esAutenticado]);

  return (
    <div className="md:h-screen md:flex md:items-center md:justify-center">
      <div className="border-solid border-4 border-verdeOriginal rounded-xl md:flex md:h-[500px] items-center justify-center md:m-24 m-10">
        <div className="">
          <img
            src={grupStudent}
            alt=""
            className=" rounded-t-[6px] w-full object-cover md:h-[500px] md:rounded-l-xl "
          />
        </div>
        <div className=" h-[500px] p-10">
          {signinErrors.map((error, i) => (
            <div className="text-red-500" key={i}>
              {error}
            </div>
          ))}
          <div className=" text-white font-bold flex h-1/6 w-full my-3 rounded-2xl">
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

          <div className="flex w-full justify-center">
            <img src={logoColor} alt="" className="h-20" />
          </div>
          <h1 className="text-2xl text-verdeOriginal font-bold text-center">
            Inicio de Sesión
          </h1>
          <form onSubmit={alEnviar} className="flex flex-col items-center">
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full border-4 border-verdeOriginal  px-4 py-2 rounded-md my-2 "
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500">Email requerido</p>}

            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full border-4 border-verdeOriginal px-4 py-2 rounded-md my-2"
              placeholder="Contraseña"
            />
            {errors.password && (
              <p className="text-red-500">Contraseña requerida</p>
            )}

            <button
              type="submit"
              className="rounded-full bg-verdeOriginal px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-teal-500 active:bg-blue-700"
            >
              Iniciar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
