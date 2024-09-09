import React from 'react'
import { Link } from 'react-router-dom'

function FooterLinks({el , showText= true}) {
  return (
        <Link className='flex items-center gap-1 px-3 py-1 text-subtitle hover:translate-x-1 transition-all hover:text-text' to={el.link} >{el.icon && <el.icon />}{showText && el.title}</Link>
  )
}

export default FooterLinks