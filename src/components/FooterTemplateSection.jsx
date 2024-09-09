import React, { useRef } from 'react'
import FooterLinks from './FooterLinks'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function FooterTemplateSection({menu , title}) {

  return (
    <div>
    <h3 className='text-text font-bold md:text-xl'>{title}</h3>
    <div>
      {menu.map((el , i)=><FooterLinks key={i} el={el} />)}
    </div>
  </div>
  )
}

export default FooterTemplateSection