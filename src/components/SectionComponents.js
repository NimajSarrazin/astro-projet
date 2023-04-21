// import React from 'react'
import TitleSection from "./TitleSection";
import CardBlogs from "./cards/CardBlogs";
import CardImgBlogs from "./cards/CardImgBlogs";
import CardSectionComponents from "./cards/CardSectionComponents";
import { dataCardComponent } from "../data/DataCardComponents";

export default function SectionComponents() {
  return (
    <>
      <div className="bg-blue-100 py-20 px-20">
        <TitleSection
          title="Components"
          subtitle="Most used widgets"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, obcaecati."
        />
        <div className="py-5 px-60 w-full">
          <div className="grid grid-cols-3 gap-8 pt-10">
            {dataCardComponent.map((item, index) => (
              <CardSectionComponents
                key={index}
                img={item.img}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="py-20 px-20">
        <CardBlogs
          title="Find out more content in our Blog"
          description="View all post»"
          text="The blog is used to display AstroWind documentation. Each new article will be an important step that you will need to know to be an expert in creatinga website using Astro + Tailwind CSS. Astro is a very interesting technology. Thanks."
        />
        <div className="flex justify-between py-4">
          <CardImgBlogs
            img="img/5.jpg"
            title="Get started with AstroWind to create a website using Astro and Tailwind CSS"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt consectetur blanditiis explicabo quae."
          />
          <CardImgBlogs
            img="img/6.jpg"
            title="Useful tools and resources to create a professional website"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt consectetur blanditiis explicabo quae."
          />
          <CardImgBlogs
            img="img/5.jpg"
            title="AstroWind template in depth"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt consectetur blanditiis explicabo quae."
          />
          <CardImgBlogs
            img="img/7.jpg"
            title="How to customize AstroWind template to suit your branding"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt consectetur blanditiis explicabo quae."
          />
        </div>
      </div>
    </>
  );
}
