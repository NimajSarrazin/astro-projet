// import React from 'react'

import { HiDownload } from "react-icons/hi";

export default function ButtonWithIcon({ title, bgc }) {
  return (
    <div className="flex">
    <button className={` ${bgc} flex text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow`}>
    <HiDownload className="text-2xl mr-2"/>
      {title}
    </button>

    </div>
  );
}
