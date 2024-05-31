import logoBlanco from "../assets/logoBlanco.png";
import grupStudent from "../assets/grupStudent.png";

import CardRumiSmall from "../components/CardRumiSmall";
function PaginaPrincipalPage() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div class="flex bg-[url('/src/assets/banner.jpg')] bg-cover w-11/12 h-[500px] rounded-3xl justify-center items-center mt-5">
        <img src={logoBlanco} alt="logoApp" />
      </div>
      <div class="w-11/12 h-[500px]">
        <div className="flex justify-between m-10">
          <h2 className="text-5xl">Busco Rumis</h2>
          <div className="flex bg-green-400 h-14 w-32 rounded-full text-green-900 font-bold items-center justify-center">
            <a href="/rumis">Todos</a>
          </div>
        </div>
        <div className="flex gap-8 justify-center ">
          <CardRumiSmall />
          <CardRumiSmall />
        </div>
      </div>
      <div class="flex  w-11/12 h-[500px] rounded-3xl" id="somos">
        <img src={grupStudent} className="rounded-l-3xl h-[500px]" />
        <div className="m-28">
          <h1 className="text-[40px] font-bold mb-10">Quienes Somos !!</h1>
          <p className="text-justify">
            En Soy tu Rumi, nos dedicamos a facilitar la búsqueda de tu
            compañero de arriendo, creando conexiones significativas dentro de
            la comunidad universitaria. Somos una plataforma comprometida con
            brindar soluciones prácticas para estudiantes que buscan un hogar
            temporal o de largo plazo, así como aquellos en la búsqueda de
            compañeros de cuarto que compartan sus mismas necesidades y
            preferencias.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaginaPrincipalPage;
