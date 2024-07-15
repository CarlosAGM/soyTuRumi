import logoBlanco from "../assets/logoBlanco.png";
import grupStudent from "../assets/grupStudent.png";
import persona1 from "../assets/persona1.png";
import persona6 from "../assets/persona6.png";
import persona2 from "../assets/persona2.png";
import persona7 from "../assets/persona7.png";

import CardRumiSmall from "../components/CardRumiSmall";
function PaginaPrincipalPage() {
  return (
    <div className="flex flex-col items-center gap-10 mt-24">
      <div className="flex bg-[url('/src/assets/banner.jpg')] bg-cover w-11/12 h-[500px] rounded-3xl justify-center items-center mt-5">
        <img src={logoBlanco} alt="logoApp" />
      </div>
      <div className="md:w-11/12 md:h-[500px]">
        <div className="flex justify-between m-10 text-verdeOriginal font-bold">
          <h2 className="text-5xl">Busco Rumis</h2>
          <div className="flex bg-green-400 h-14 w-32 rounded-full text-green-900 font-bold items-center justify-center">
            <a href="/rumis">Todos</a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 md:flex-row">
          <CardRumiSmall
            region={"Valparaíso"}
            nombre={"Alberto"}
            universidad={"Duoc Uc"}
            foto={persona1}
            direccionUrl={"/rumis"}
          />
          <CardRumiSmall
            region={"Rancagua"}
            nombre={"Andrea"}
            universidad={"O'Higgins"}
            foto={persona6}
            direccionUrl={"/rumis"}
          />
          <CardRumiSmall
            region={"Valparíso"}
            nombre={"Génesis"}
            universidad={"CFT"}
            foto={persona2}
            direccionUrl={"/rumis"}
          />
          <CardRumiSmall
            region={"Santiago"}
            nombre={"Pedro"}
            universidad={"UNAB"}
            foto={persona7}
            direccionUrl={"/rumis"}
          />
        </div>
      </div>
      <div
        className="flex flex-col items-center md:flex-row  w-11/12 md:h-[500px] rounded-3xl"
        id="somos"
      >
        <img src={grupStudent} className="rounded-3xl" />
        <div className="flex flex-col items-center justify-center md:ml-10">
          <h1 className="text-[40px] font-bold my-7 text-verdeOriginal">
            Quienes Somos !!
          </h1>
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
