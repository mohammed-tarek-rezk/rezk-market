import React, { useEffect } from 'react'
import { MENU } from '../services/headerNavServices'
import { Link, useLocation } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Search from './Search'

function PopNav() {
    let location = useLocation()
    useGSAP(()=>{
        gsap.from(".pop",{
            opacity:0,
            y:50, 
            duration:0.4
        })
    },[])


  return (
    <div className='pop flex flex-col gap-2 absolute top-full bg-white w-full left-0 rounded-lg border-2 border-gray-100 overflow-hidden'>
        {MENU.map((el , index)=> <Link to={el.link} key={index} className={`p-3  border-b-2 border-gray-100 hover:text-pink hover:scale-[1.01]  hover:border-pink transition-all ${location.pathname === el.link ? "text-pink scale-[1.01]":""} `}>{el.title}</Link>)}
        <Search className={" w-full rounded-lg border-none"} />
    </div>
  )
}

export default PopNav