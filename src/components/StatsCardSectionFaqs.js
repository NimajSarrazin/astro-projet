import React from 'react'

export default function StatsCardSectionFaqs({number, description}) {
  return (
    <div className='py-20'>
        <p className='text-5xl font-black text-blue-600'>{number}</p>
        <p className='uppercase text-center'>{description}</p>
    </div>
  )
}
