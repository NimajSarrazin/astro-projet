// import React from 'react'
import TitleSection from "./TitleSection";
import CardSectionComponents from "./cards/CardSectionComponents";

export default function SectionComponents() {
  return (
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
  );
}
