// import React from 'react'

import Button from "./navigation/btn/Button";
import ButtonWithIcon from "./navigation/btn/ButtonWithIcon";

export default function Hero() {
  return (
    <>
      <div className="p-10  px-5 py-5 text-center max-w-5xl mx-auto">
        <h1 className="font-black text-5xl pb-3">
          {" "}
          Free template for create your website with
          <span className="text-purple-600">Astro 2.0</span> + Tailwind CSS
        </h1>
        <p>
          AstroWind is a free, customizable and production-ready template for
          Astro 2.0 + Tailwind CSS.
        </p>
        <p>
          {" "}
          Suitable for Startups, Small Buissness, Sass Websites; Professional
        </p>
        <p className="pb-4">Portfolios, Marketing WebSites, Landing Pages & Blogs.</p>
        <div className="flex space-x-3 justify-center pb-4">
          <ButtonWithIcon title="Get Template" bgc="bg-blue-800" />
          <Button title="Learn more"/>
        </div>
        <img src="img/1.png" alt="" />
      </div>
    </>
  );
}
