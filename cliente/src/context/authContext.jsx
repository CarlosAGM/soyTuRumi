import { createContext, useState, useContext, useEffect } from "react";
import { registroRequest, loginRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [esAutenticado, setEsAutenticado] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (user) => {
    try {
      const res = await registroRequest(user);
      console.log(res.data);
      setUser(res.data);
      setEsAutenticado(true);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const tiempoError = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(tiempoError);
    }
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{ signup, signin, user, esAutenticado, errors }}
    >
      {children}
    </AuthContext.Provider>
  );
};
