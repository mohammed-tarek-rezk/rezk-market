import React, { useRef } from 'react'
import {Container, FooterLinks, FooterTemplateSection, Logo} from './index'
import { CONTACT_MENU } from '../services/contactServices'
import { Link } from 'react-router-dom'
import { MENU } from '../services/headerNavServices'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Footer() {
  let animation = useRef()
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)
      gsap.from(".footer-animation", {
          y:50, 
          opacity:0,
          duration:1,
          stagger: 0,
          scrollTrigger:{
            trigger: animation.current,
            start: "bottom bottom",
            invalidateOnRefresh: true
          }
      })
  },[])
  
  return (
    <>
    <div className='footer-disp py-1' ref={animation}></div>
    <footer className=' overflow-hidden' >
      <div className='bg-lightBlue' >
        <Container className={`grid md:grid-cols-5   py-12 gap-6 footer-animation`}  >
          <div className='col-span-2'>
            <Logo className=' justify-start' />
              <form className=' flex w-full my-3'>
                <input type='email' placeholder='Enter Email Address' className='h-full py-3 px-3 outline-none flex-grow' />
                <button type='submit' className='btn'>Sign up</button>
              </form>
          </div>
          <FooterTemplateSection menu={CONTACT_MENU} title={"Contact Info"}/>
          <FooterTemplateSection menu={MENU} title={"Customer Care"}/>
          <FooterTemplateSection menu={MENU} title={"Pages"}/>
        </Container>
      </div>
        <div className='bg-[#E7E4F8] py-6 '>
          <Container className={"flex flex-col md:flex-row items-center md:justify-between "}>
            <p className='text-subtitle'>&copy;Rezk, All Rights Reserved {new Date().getFullYear()}</p>
            <div className='flex'>{CONTACT_MENU.map((el, i)=> <FooterLinks key={i} el={el}  showText={false}/> )}</div>
          </Container>
        </div>
    </footer>
    </>
  )
}

export default Footer