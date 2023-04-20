import React from 'react'

export default function CardBlogs(img,title) {
  return (
    <div>
        <img src={img} alt="" />
        <p>{title}</p>
    </div>
  )
}
