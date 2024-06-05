import { createContext, useContext, useState, useEffect } from "react";
import {
  crearRumiRequest,
  obtenerRumisRequest,
  borrarRumiRequest,
  obtenerRumiRequest,
  actualizarRumiRequest,
} from "../api/rumi";
const RumiContext = createContext();

export const useRumis = () => {
  const context = useContext(RumiContext);
  if (!context) {
    throw new Error("useRumi debe ir con RumiProvider");
  }
  return context;
};

export function RumiProvider({ children }) {
  const [rumis, setRumis] = useState([]);

  const obtenerRumis = async () => {
    const res = await obtenerRumisRequest();
    setRumis(res.data);
  };

  const crearRumi = async (nuevoRumi) => {
    const res = await crearRumiRequest(nuevoRumi);
  };
  const eliminarRumi = async (id) => {
    try {
      const res = await borrarRumiRequest(id);
      if (res.status == 204) setRumis(rumis.filter((rumi) => rumi._id != id));
    } catch (error) {
      console.log(error);
    }
  };
  const obtenerRumi = async (id) => {
    try {
      const res = await obtenerRumiRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const actualizarRumi = async (id, rumi) => {
    try {
      await actualizarRumiRequest(id, rumi);
    } catch (error) {
      console.log(error);
    }
  };

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
