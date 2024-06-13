import { createContext, useState, useContext, useEffect } from "react";
import {
  registroRequest,
  loginRequest,
  verificarTokenRequest,
  actualizarUserRequest,
  borrarUserRequest,
  obtenerUserRequest,
} from "../api/auth"; // Importa las funciones de API para las operaciones de autenticación y usuario
import Cookies from "js-cookie"; // Importa la biblioteca js-cookie para trabajar con cookies

// Crea un contexto de autenticación
export const AuthContext = createContext();

// Funcion para consumir el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};

// Componente proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para almacenar la información del usuario autenticado
  const [esAutenticado, setEsAutenticado] = useState(false); // Estado para indicar si el usuario está autenticado
  const [errors, setErrors] = useState([]); // Estado para almacenar errores relacionados con la autenticación o las operaciones de usuario
  const [loading, setLoading] = useState(true); // Estado para indicar si se está cargando la autenticación

  // Función para registrar un nuevo usuario
  const signup = async (user) => {
    try {
      const res = await registroRequest(user); // Llama a la función de la API para el registro de usuario

      setUser(res.data); // Establece el usuario en el estado después del registro
      setEsAutenticado(true); // Marca al usuario como autenticado
    } catch (error) {
      setErrors(error.response.data); // Establece los errores en caso de que haya algún problema durante el registro
    }
  };

  // Función para iniciar sesión
  const signin = async (user) => {
    try {
      const res = await loginRequest(user); // Llama a la función de la API para el inicio de sesión

      setEsAutenticado(true); // Marca al usuario como autenticado
      setUser(res.data); // Establece la información del usuario en el estado después del inicio de sesión
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data); // Establece los errores en caso de que haya algún problema durante el inicio de sesión
      }
      setErrors([error.response.data.message]);
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    Cookies.remove("token"); // Elimina la cookie de token
    setEsAutenticado(false); // Marca al usuario como no autenticado
    setUser(null); // Elimina la información del usuario del estado
  };

  // Limpiar los errores después de 5 segundos
  useEffect(() => {
    if (errors.length > 0) {
      const errorTimeout = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(errorTimeout);
    }
  }, [errors]);

  // Verificar si hay un usuario autenticado al cargar la página
  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get(); // Obtiene todas las cookies

      if (!cookies.token) {
        // Si no hay una cookie de token
        setEsAutenticado(false); // Marca al usuario como no autenticado
        setLoading(false); // Finaliza la carga
        return setUser(null); // Elimina la información del usuario del estado
      }
      try {
        const res = await verificarTokenRequest(); // Llama a la función de la API para verificar el token

        if (!res.data) {
          // Si el token no es válido
          setEsAutenticado(false); // Marca al usuario como no autenticado
          setLoading(false); // Finaliza la carga
          return;
        }

        setEsAutenticado(true); // Marca al usuario como autenticado
        setUser(res.data); // Establece la información del usuario en el estado
        setLoading(false); // Finaliza la carga
      } catch (error) {
        setEsAutenticado(false); // Marca al usuario como no autenticado
        setUser(null); // Elimina la información del usuario del estado
        setLoading(false); // Finaliza la carga
      }
    }
    checkLogin();
  }, []);

  // Función para actualizar la información de un usuario
  const actualizarUser = async (id, user) => {
    try {
      await actualizarUserRequest(id, user); // Llama a la función de la API para actualizar la información del usuario
    } catch (error) {
      console.log(error); // Maneja cualquier error que ocurra durante la actualización
    }
  };

  // Función para eliminar un usuario
  const borrarUser = async (id) => {
    try {
      const res = await borrarUserRequest(id); // Llama a la función de la API para eliminar un usuario
      if (res.status === 204) setUser(user.filter((user) => user._id !== id)); // Actualiza el estado de usuarios después de la eliminación
    } catch (error) {
      console.log(error); // Maneja cualquier error que ocurra durante la eliminación
    }
  };

  // Función para obtener la información de un usuario
  const obtenerUser = async (id) => {
    try {
      const res = await obtenerUserRequest(id); // Llama a la función de la API para obtener la información de un usuario
      return res.data; // Retorna los datos del usuario
    } catch (error) {
      console.log(error); // Maneja cualquier error que ocurra durante la obtención de la información del usuario
    }
  };

  // Provee el contexto de autenticación y funciones a los componentes hijos
  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        logout,
        actualizarUser,
        borrarUser,
        obtenerUser,
        loading,
        user,
        esAutenticado,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
