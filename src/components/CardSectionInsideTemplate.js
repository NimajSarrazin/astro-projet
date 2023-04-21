import React from "react";
import CardSectionFeature from "./CardSectionFeature";
// import { dataCards } from "../data/DataCardFeature";
import CardSectionDream from "./cards/CardSectionDream";
import { dataCardInsideTemplate } from "../data/DataCardInsideTemplate";


export default function CardSectionInsideTemplate({ img, img2, img3, step,tilte,text }) {
  return (
    <>
      <div className="bg-blue-100 flex justify-center mx-auto gap-8">
        <aside>
          <CardSectionFeature
            title="Ad vix debet docendi"
            description="A seamless integration between two great frame works that offer high productivity, performance and versatility."
          />
          <CardSectionFeature
            iconName="VscCheck"
            bgColorIcon="bg-[#3141AA] rounded-full p-2 text-2xl"
            title="Per ei quaeque sensibus"
            description="Widget made with Tailwind CSS Ready to be used in Marketing Websites, Saas, Blogs, Personal Profiles, Small Business..."
          />
          <CardSectionFeature
            iconName="VscCheck"
            bgColorIcon="bg-[#3141AA] rounded-full p-2 text-2xl"
            title="Cu imperdiet posionium sed"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, tenetur! Ullam facere ipsam culpa, dolore architecto saepe."
          />
          <CardSectionFeature
            iconName=""
            bgColorIcon="bg-[#3141AA] rounded-full p-2 text-2xl"
            title="Nulla omittam sadipscing mel ne"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, tenetur! Ullam facere ipsam culpa, dolore architecto saepe."
          />
        </aside>
        <aside className="max-w-md">
          <img className="rounded-lg" src={img} alt="" />
        </aside>
      </div>
      <div className="bg-blue-100 pb-20 flex flex-row-reverse justify-center mx-auto gap-8 ">
        <aside className="text-sm  my-auto ml-14">
          <CardSectionFeature
            iconName="VscCheck"
            bgColorIcon="bg-[#3141AA] rounded-full p-2 text-2xl"
            title="Per ei quaeque sensibus"
          />
          <CardSectionFeature
            iconName="VscCheck"
            bgColorIcon="bg-[#3141AA] rounded-full p-2 text-2xl"
            title="Cu imperdiet posionium sed"
          />
          <CardSectionFeature
            iconName="VscCheck"
            bgColorIcon="bg-[#3141AA] rounded-full p-2 text-2xl"
            title="Nulla omittam sadipscing mel ne"
          />
          <CardSectionFeature
            iconName="VscCheck"
            bgColorIcon="bg-[#3141AA] rounded-full p-2 text-2xl"
            title="Per ei quaeque sensibus"
          />
          <CardSectionFeature
            iconName="VscCheck"
            bgColorIcon="bg-[#3141AA] rounded-full p-2 text-2xl"
            title="Cu imperdiet posionium sed"
          />
          <CardSectionFeature
            iconName="VscCheck"
            bgColorIcon="bg-[#3141AA] rounded-full p-2 text-2xl"
            title="Nulla omittam sadipscing mel ne"
          />
        </aside>
        <aside className="max-w-md">
          <img className="rounded-lg" src={img2} alt="" />
        </aside>
      </div>
    </>
  );
}
