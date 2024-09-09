import React from 'react'
import { MAIN_LINKS } from './MainRoutes'
import {HeaderNavLink} from './index'
import { MENU } from '../services/headerNavServices'


function HeaderNav() {
  return (
    <div className='center gap-3'>
        {MENU.map((el, i)=><HeaderNavLink key={i} item={el} />)}
    </div>
  )
}

export default HeaderNav