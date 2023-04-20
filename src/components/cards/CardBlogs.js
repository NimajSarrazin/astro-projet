// import React from 'react'

export default function CardBlogs({title, description, text}) {
  return (
    <>
      <div className="">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-3xl max-w-sm">{title}</h2>
            <p className="max-w-lg">{text}</p>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
