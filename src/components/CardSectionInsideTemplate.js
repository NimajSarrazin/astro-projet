import React from "react";
import CardSectionFeature from "./CardSectionFeature";

export default function CardSectionInsideTemplate({ img, img2, img3 }) {
  return (
    <>
      <div className="bg-blue-100 py-10 flex justify-center mx-auto gap-8">
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
            iconName="VscCheck"
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

      <div className="flex justify-center py-10  mx-auto gap-8">
        <aside className="text-sm font-light my-auto ml-14">
          <h2 className="text-xl uppercase font-black max-w-sm mx-auto pb-5">
            Get you dream website up and running in no time with AstroWind.
          </h2>
          <CardSectionFeature
            iconName="BsBoxSeam"
            bgColorIcon="border border-2 border-blue-900 rounded-full p-2 text-4xl text-blue-900"
            title="Step 1: Download"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis reiciendis dolore. Nihil repellat sint totam placeat vero repellendus id impedit, suscipit, et tempore hic."
          />
          <CardSectionFeature
            iconName="IoTextOutline"
            bgColorIcon="border border-2 border-blue-900 rounded-full p-2 text-4xl text-blue-900 rounded-full"
            title="Step 2: Add content"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis reiciendis dolore."
          />
          <CardSectionFeature
            iconName="GiPaintRoller"
            bgColorIcon="border border-2 border-blue-900 rounded-full p-2 text-4xl text-blue-900 rounded-full"
            title="Step 3: Customize styles"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero debitis reiciendis dolore. Nihil repellat sint totam placeat vero repellendus id impedit, suscipit, et tempore hic.Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <CardSectionFeature
            iconName="VscCheck"
            bgColorIcon="bg-[#3141AA] rounded-full p-2 text-4xl"
            title="Ready!"
          />
        </aside>
        <div className="max-w-xs">
          <img src={img3} alt="" />
        </div>
      </div>
      
    </>
  );
}
