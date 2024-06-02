import { useEffect } from "react";
import { useRumis } from "../context/RumiContext";
import CardRumi from "../components/CardRumi";
function RumisPage() {
  const { obtenerRumis, rumis } = useRumis();
  useEffect(() => {
    obtenerRumis();
  }, []);
  return (
    <div className="flex flex-col justify-center m-[20px] md:grid grid-cols-3 gap-2">
      {rumis.map((rumi) => (
        <CardRumi rumi={rumi} key={rumi._id} />
      ))}
    </div>
  );
}

export default RumisPage;
