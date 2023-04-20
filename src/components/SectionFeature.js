import React from "react";
import { BsInfoSquare } from "react-icons/bs";

import TitleSection from "./TitleSection";
import CardSectionFeature from "./CardSectionFeature";
export default function SectionFeature() {
  return (
    <>
      <div className="flex justify-center bg-blue-100 items-center text-sm space-x-2 p-4">
        <BsInfoSquare />
        <p>
          <span className="font-bold">Philosophy:</span> Simplicity, Best
          Practices and High Perfomance
        </p>
      </div>
      <div className="py-10 px-20">
        <TitleSection
          title="Features"
          subtitle="What you get with AstroWind"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, tenetur? Impedit tempora repellendus quisquam incidunt sunt aliquid."
        />
      </div>
      <div className="flex justify-center space-x-5 p-5">
        <aside>
          <CardSectionFeature
            iconName="TbBrandTailwind"
            bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
            title="Astro + Tailwind CSS Integration"
            description="A seamless integration between two great frame works that offer high productivity, performance and versatility."
          />
          <CardSectionFeature
            iconName="BsXDiamondFill"
            bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
            title="Ready-to-use Components"
            description="Widget made with Tailwind CSS Ready to be used in Marketing Websites, Saas, Blogs, Personal Profiles, Small Business..."
          />
          <CardSectionFeature
            iconName="VscChecklist"
            bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
            title="Best Practices"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, tenetur! Ullam facere ipsam culpa, dolore architecto saepe."
          />
        </aside>
        <aside>
          <CardSectionFeature
            iconName="IoIosRocket"
            bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
            title="Excellent Page Speed"
            description="Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates."
          />
          <CardSectionFeature
            iconName="BsArrowLeftRight"
            bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
            title="Search Engine Optimization (SEO)"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, tenetur! Ullam facere ipsam culpa, dolore architecto saepe."
          />
          <CardSectionFeature
            iconName="HiOutlineLightBulb"
            bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
            title="Open to new ideas and contributions"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, tenetur! Ullam facere ipsam culpa, dolore architecto saepe"
          />
        </aside>
      </div>
    </>
  );
}
