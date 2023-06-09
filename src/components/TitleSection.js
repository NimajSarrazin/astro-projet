import React from 'react'

export default function TitleSection({title,subtitle,description}) {
  return (
    <div className='text-center'>
        <p className='uppercase text-purple-500 text-sm'>{title}</p>
        <p className='font-bold text-3xl pb-4'>{subtitle}</p>
        <p className='font-light max-w-xl  mx-auto'>{description}</p>
    </div>
  )
}
