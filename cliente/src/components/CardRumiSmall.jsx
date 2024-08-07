import React from "react";
import persona2 from "../assets/persona2.png";
function CardRumiSmall({ region, nombre, universidad, foto, direccionUrl }) {
  return (
    <div className="h-[350px] w-[350px] bg-gray-200 rounded-2xl shadow-lg">
      <div className="">
        <img
          src={foto}
          className="rounded-t-2xl object-cover w-[350px] h-[210px]"
          alt=""
        />
      </div>
      <div className="flex">
        <div className="m-3">
          <h1 className="text-[20px] font-bold">Soy {nombre}</h1>
          <div className="flex gap-2 mt-2 items-center">
            <ion-icon
              name="location"
              size="small"
              className="relative"
            ></ion-icon>
            <div>{region}</div>
          </div>
          <div className="flex gap-2 mt-2 items-center">
            <ion-icon name="school"></ion-icon>
            <div>{universidad}</div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[175px]">
          <a
            href={direccionUrl}
            className="flex bg-green-400 h-14 w-32 rounded-full text-green-900 font-bold items-center justify-center"
          >
            Únete
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardRumiSmall;
