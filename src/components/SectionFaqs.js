import React from "react";
import TitleSection from "./TitleSection";
import CardFaqs from "./cards/CardFaqs";
import StatsCardSectionFaqs from "./StatsCardSectionFaqs";
import CardFasqAstro from "./cards/CardFaqsAstro";


export default function SectionFaqs() {
  return (
    <>
      <div className="py-20 px-20">
        <TitleSection
          title="Faqs"
          subtitle="Frequently asked questions"
          description="Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque.Morbi tincidunt lacus nec tortor scelerisque pulvinar."
        />
      </div>
      <div className="flex justify-center mx-auto py-10 space-x-5">
        <div className="max-w-sm">
          <CardFaqs
            title="What do I need to start?"
            iconName="BsArrowDownRight"
            description="Space, the final frontier. These are the voyages of the Starship Entreprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but its actually our duty to future geractions"
          />
          <CardFaqs
            title="How to install the Astro + Tailwind CSS template?"
            iconName="BsArrowDownRight"
            description="Space, the final frontier. These are the voyages of the Starship Entreprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but its actually our duty to future geractions"
          />
          <CardFaqs
            title="What's something that you don't understand ?"
            iconName="BsArrowDownRight"
            description="Space, the final frontier. These are the voyages of the Starship Entreprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but its actually our duty to future geractions"
          />
        </div>
        <div className="max-w-sm">
          <CardFaqs
            title="What's an exemple of when you changed your mind?"
            iconName="BsArrowDownRight"
            description="Space, the final frontier. These are the voyages of the Starship Entreprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but its actually our duty to future geractions"
          />
          <CardFaqs
            title="What is something that you would like to try again"
            iconName="BsArrowDownRight"
            description="Space, the final frontier. These are the voyages of the Starship Entreprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but its actually our duty to future geractions"
          />
          <CardFaqs
            title="If you could only ask one question to each person you meet, what would that question be?"
            iconName="BsArrowDownRight"
            description="Space, the final frontier. These are the voyages of the Starship Entreprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but its actually our duty to future geractions"
          />
        </div>
      </div>
      <div className="flex justify-center space-x-20">
        <StatsCardSectionFaqs number="132K" description="downloads" />
        <StatsCardSectionFaqs number="24.8K" description="stars" />
        <StatsCardSectionFaqs number="10.3K" description="forks" />
        <StatsCardSectionFaqs number="48.4K" description="user" />
      </div>

      <div className="py-10">
        <CardFasqAstro
          title="Astro +Tailwind CSS"
          description="Be very suprised by these huge fake numbers you are seeing on this page. Dont waste more time"
        />
      </div>
    </>
  );
}
