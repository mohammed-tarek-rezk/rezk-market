import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function HeaderNavLink({item}) {
    let location = useLocation()
  return (
    <Link to={item.link} className={`hover:text-violet transition-all hover:scale-105 ${location.pathname === item.link ? "text-violet scale-" : ""}`}>{item.title}</Link>
  )
}

export default HeaderNavLink