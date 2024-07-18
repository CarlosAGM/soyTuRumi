import { createContext, useContext, useState, useEffect } from "react";
import {
  crearRumiRequest,
  obtenerRumisRequest,
  borrarRumiRequest,
  obtenerRumiRequest,
  actualizarRumiRequest,
} from "../api/rumi";

import { useAuth } from "../context/authContext";
// Se crea un contexto de React para manejar los rumis
const RumiContext = createContext();

// Funcion useRumis para acceder al contexto de los rumis
export const useRumis = () => {
  const context = useContext(RumiContext);
  if (!context) {
    throw new Error("useRumi debe ir con RumiProvider");
  }
  return context;
};

// Componente RumiProvider que provee a la aplicación
export function RumiProvider({ children }) {
  const [rumis, setRumis] = useState([]);

  // Función para obtener todos los rumis
  const obtenerRumis = async () => {
    const res = await obtenerRumisRequest();
    setRumis(res.data);
  };

  // Función para crear un nuevo rumi
  const crearRumi = async (nuevoRumi) => {
    const res = await crearRumiRequest(nuevoRumi);
  };

  // Función para eliminar un rumi
  const eliminarRumi = async (id) => {
    try {
      const res = await borrarRumiRequest(id);
      if (res.status === 204) {
        setRumis(rumis.filter((rumi) => rumi._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Función para obtener un rumi por su ID
  const obtenerRumi = async (id) => {
    try {
      const res = await obtenerRumiRequest(id);
      return res.data; // Retorna los datos del rumi encontrado
    } catch (error) {
      console.log(error);
    }
  };

  // Función para actualizar un rumi
  const actualizarRumi = async (id, rumi) => {
    try {
      await actualizarRumiRequest(id, rumi);
    } catch (error) {
      console.log(error);
    }
  };

  // Retorna el proveedor de contexto y los métodos relacionados con los rumis
  return (
    <RumiContext.Provider
      value={{
        rumis,
        crearRumi,
        obtenerRumis,
        eliminarRumi,
        obtenerRumi,
        actualizarRumi,
      }}
    >
      {children}
    </RumiContext.Provider>
  );
}
