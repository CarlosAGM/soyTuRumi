import { useEffect, useState } from "react";
import { useRumis } from "../context/RumiContext";
import CardRumi from "../components/CardRumi";
import CardRumiParams from "../components/CardRumiParms";
import BuscadorBar from "../components/BuscadorBar";

function RumisPage() {
  const { obtenerRumis, rumis } = useRumis();
  const [buscar, setBuscar] = useState("");

  const buscador = (e) => {
    setBuscar(e.target.value);
    console.log(setBuscar);
  };
  //filtrado
  let resultado = [];
  if (!buscar) {
    resultado = obtenerRumis;
  } else {
    resultado = obtenerRumis.filter((dato) =>
      dato.region.toLowerCase().includes(buscar.toLocaleLowerCase())
    );
  }

  useEffect(() => {
    obtenerRumis();
  }, []);
  return (
    <div className="grid md:flex justify-center items-center m-[20px] gap-2">
      {rumis.map((rumi) => (
        <CardRumiParams rumi={rumi} key={rumi._id} />
      ))}
    </div>
  );
}

export default RumisPage;
