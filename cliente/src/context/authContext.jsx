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

      setUser(res.data);
      setEsAutenticado(true);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);

      setEsAutenticado(true);
      setUser(res.data);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setEsAutenticado(false);
    setUser(null);
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

        if (!res.data) {
          setEsAutenticado(false);
          setLoading(false);
          return;
        }

        setEsAutenticado(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setEsAutenticado(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signup, signin, logout, loading, user, esAutenticado, errors }}
    >
      {children}
    </AuthContext.Provider>
  );
};
