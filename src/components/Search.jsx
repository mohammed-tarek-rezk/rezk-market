import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Search({className =""}) {
  return (
    <div className={` relative  w-fit ${className}`}>
        <input type='text' className={` border-2 border-gray-200 pr-5 pl-1 py-1 focus:border-pink focus:outline-none ${className}`} placeholder='search.......'/>
        <span className='absolute bg-pink text-white h-full w-10 center top-0 right-0 '><FaSearch /></span>
    </div>
  )
}

export default Search