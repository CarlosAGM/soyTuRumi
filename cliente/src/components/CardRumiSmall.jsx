import React from "react";
import persona2 from "../assets/persona2.png";
function CardRumiSmall() {
  return (
    <div className="h-[350px] w-[350px] bg-gray-200 rounded-2xl">
      <div className="">
        <img
          src={persona2}
          className="rounded-t-2xl object-cover w-[350px] h-[210px]"
          alt=""
        />
      </div>
      <div className="flex">
        <div className="m-3">
          <h1 className="text-[20px] font-bold">Soy Paula</h1>
          <div className="flex gap-2 mt-2 items-center">
            <ion-icon
              name="location"
              size="small"
              className="relative"
            ></ion-icon>
            <div>Valparaiso, Chile</div>
          </div>
          <div className="flex gap-2 mt-2 items-center">
            <ion-icon name="school"></ion-icon>
            <div>CFT Valparaiso</div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[175px]">
          <a
            href="#"
            className="flex bg-green-400 h-14 w-32 rounded-full text-green-900 font-bold items-center justify-center"
          >
            Contactame
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardRumiSmall;
