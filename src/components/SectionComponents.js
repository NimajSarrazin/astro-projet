// import React from 'react'
import TitleSection from "./TitleSection";
import CardBlogs from "./cards/CardBlogs";
import CardImgBlogs from "./cards/CardImgBlogs";
import CardSectionComponents from "./cards/CardSectionComponents";

export default function SectionComponents() {
  return (
    <>
      <div className="bg-blue-100 py-10 px-20">
        <TitleSection
          title="Components"
          subtitle="Most used widgets"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, obcaecati."
        />
        <div className="py-5 px-60 w-full">
          <div className="grid grid-cols-3 gap-8">
            <CardSectionComponents
              img="img/headers.png"
              title="Headers"
              description="In gereal, Headers contain information that makes it easier for visitor to interact with the website."
            />
            <CardSectionComponents
              img="img/heros.png"
              title="heros"
              description="In gereal, Headers contain information that makes it easier for visitor to interact with the website."
            />
            <CardSectionComponents
              img="img/planification.png"
              title="Features"
              description="In gereal, Headers contain information that makes it easier for visitor to interact with the website."
            />
            <CardSectionComponents
              img="img/document.png"
              title="Content"
              description="In gereal, Headers contain information that makes it easier for visitor to interact with the website."
            />
            <CardSectionComponents
              img="img/megaphone.png"
              title="Call-to-Action"
              description="In gereal, Headers contain information that makes it easier for visitor to interact with the website."
            />
            <CardSectionComponents
              img="img/money.png"
              title="Pricing"
              description="In gereal, Headers contain information that makes it easier for visitor to interact with the website."
            />
            <CardSectionComponents
              img="img/testimonial.png"
              title="Testimonail"
              description="In gereal, Headers contain information that makes it easier for visitor to interact with the website."
            />
            <CardSectionComponents
              img="img/contact-us.png"
              title="Contact"
              description="In gereal, Headers contain information that makes it easier for visitor to interact with the website."
            />
            <CardSectionComponents
              img="img/footers.png"
              title="Footers"
              description="In gereal, Headers contain information that makes it easier for visitor to interact with the website."
            />
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
