import React from 'react'

function SectionHeader({title}) {
  return (
    <h2 className='text-2xl capitalize text-center font-bold py-10 md:text-3xl text-text'>{title}</h2>
  )
}

export default SectionHeader