import React from "react";


export default function CardSectionFeature({
  title,
  description,
  icon,
}) {
  return (
    <div className="flex py-4">
     {icon}
      <div>
        <p className="font-black pl-3">{title}</p>
        <p className="max-w-sm pl-3 font-light">{description}</p>
      </div>
    </div>
  );
}
