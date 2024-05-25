import { useEffect } from "react";
import { useRumis } from "../context/RumiContext";
import CardRumi from "../components/CardRumi";
function RumisPage() {
  const { obtenerRumis, rumis } = useRumis();
  useEffect(() => {
    obtenerRumis();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-2">
      {rumis.map((rumi) => (
        <CardRumi rumi={rumi} key={rumi._id} />
      ))}
    </div>
  );
}

export default RumisPage;
