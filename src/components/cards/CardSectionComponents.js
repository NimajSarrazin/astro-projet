import React from "react";

export default function CardSectionComponents({ title, img, description }) {
  return (
    <>
    <div className="bg-white max-w-sm p-4 shadow-2xl mx-auto px-5">
      <div className="flex space-x-5 py-3">
        <div className="w-8">
          <img src={img} alt="" />
        </div>
        <h3 className="font-black text-xl">{title}</h3>
      </div>
      <div className="max-w-sm">
        <p>{description}</p>
      </div>
    </div>
    </>
  );
}
