import React from "react";
import ButtonWithIcon from "../navigation/btn/ButtonWithIcon";

export default function CardFasqAstro({ title, img, description }) {
  return (
    <>
      <div className="bg-slate-200 max-w-xl text-center mx-auto p-10 shadow-2xl shadow-black px-5">
        <div className="flex space-x-5 py-3">
          <div className="w-8">
            <img src={img} alt="" />
          </div>
          <h3 className="font-black text-2xl pl-20">{title}</h3>
        </div>
        <div className="">
          <p>{description}</p>
        </div>
        <div className="py-3 flex justify-center">
          <ButtonWithIcon title="Get template" bgc="bg-blue-800" />
        </div>
      </div>
    </>
  );
}
