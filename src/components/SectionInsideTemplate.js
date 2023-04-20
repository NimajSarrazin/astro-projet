import React from "react";
import TitleSection from "./TitleSection";
import CardSectionInsideTemplate from "./CardSectionInsideTemplate";

export default function SectionInsideTemplate() {
  return (
    <>
      <div className="py-10 px-20 bg-blue-100">
        <TitleSection
          title="inside template"
          subtitle="And what's inside? ..."
        />
      </div>
      <div className="">
        <CardSectionInsideTemplate
          img="img/2.jpg"
          img2="img/3.jpg"
          img3="img/4.jpg"
        />
      </div>
    </>
  );
}
