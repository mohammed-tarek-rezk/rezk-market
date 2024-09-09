import React from 'react'
import { Link } from 'react-router-dom'
import { MAIN_LINKS } from './MainRoutes'
import logo from "./../images/logo.png"
function Logo({className=""}) {
  return (
    <Link to={MAIN_LINKS.home} className={`center text-text  ${className} `}><img src={logo} className='w-6 md:w-8 rotate-0 self-start' alt='logo'/> <span className=' text-[20px] md:text-[25px] font-bold'>REZK</span></Link>
  )
}

export default Logo