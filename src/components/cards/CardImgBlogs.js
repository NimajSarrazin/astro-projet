// import React from 'react'

export default function CardImgBlogs({img,title,description}) {
  return (
    <div className="max-w-sm">
        <img className="max-w-sm" src={img} alt="" />
        <h3 className="font-bold text-3xl max-w-xs py-3">{title}</h3>
        <p>{description}</p>
    </div>
  )
}
