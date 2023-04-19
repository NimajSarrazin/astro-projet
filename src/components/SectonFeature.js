import React from 'react'
import { BsInfoSquare } from "react-icons/bs";
import TitleSection from './TitleSection';
export default function SectonFeature() {
  return (
    <>
      <div className="flex justify-center bg-blue-200 items-center space-x-2 p-4">
        <BsInfoSquare />
        <p>
          {" "}
          <span className="font-bold">Philosophy:</span> Simplicity, Best
          Practices and High Perfomance{" "}
        </p>
      </div>
      <div className="py-20">
        <TitleSection
          title="Features"
          subtitle="What you get with AstroWind"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cum nemo hic perspiciatis ab expedita vero et rerum voluptatum necessitatibus? Cum possimus rerum necessitatibus nulla architecto delectus! Accusamus, architecto quibusdam."
        />
      </div>
    </>
  );
}
