import { createContext, useState, useContext, useEffect } from "react";
import {
  registroRequest,
  loginRequest,
  verificarTokenRequest,
} from "../api/auth";
import Cookies from "js-cookie";

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
  const [loading, setLoading] = useState(true);
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
      setEsAutenticado(true);
      setUser(res.data);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
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

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setEsAutenticado(false);
        setLoading(false);
        return setUser(null);
      }
      try {
        const res = await verificarTokenRequest(cookies.token);
        console.log(res);
        if (!res.data) {
          setEsAutenticado(false);
          setLoading(false);
          return;
        }

        setEsAutenticado(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setEsAutenticado(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signup, signin, loading, user, esAutenticado, errors }}
    >
      {children}
    </AuthContext.Provider>
  );
};
