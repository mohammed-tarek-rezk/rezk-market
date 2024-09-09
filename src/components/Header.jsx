
import {Container, HeaderNav, Logo, PopNav, Search} from './index'
import { Link, useLocation } from 'react-router-dom'
import { CiMail} from "react-icons/ci";
import { FiPhoneCall } from 'react-icons/fi';
import { MAIN_LINKS } from './MainRoutes';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';
import {  CgMenuGridR } from 'react-icons/cg';
import { useEffect, useRef, useState } from 'react';
import { FaX } from 'react-icons/fa6';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
function Header() {
  let [toggle , setToggle] = useState(false)
  let rightAn = useRef()
  let leftAn = useRef()
  let upAn = useRef()
  let location= useLocation()
  const toggleHandler = ()=>{
    setToggle((pre)=> !pre)
  }
  useGSAP(()=>{
    gsap.from(rightAn.current , {
      xPercent: 100,
      duration: 1
    })
    gsap.from(leftAn.current , {
      xPercent: -100,
      duration: 1
    })
    gsap.from(upAn.current , {
      y: 10,
      opacity:0,
      duration: 1
    })
  },[])
  useEffect(()=>{setToggle(false)},[location.pathname])
  return (
    <header className='bg-white relative z-10'>

      <div className='bg-violet py-3 text-sm md:text-base overflow-hidden'>
        <Container>
          <div className='center justify-between ' >
            <div className='center gap-3'  ref={leftAn}>
              <Link className='center gap-2 text-white' to={"mailto:mohammed.tarek.rezk@gmail.com"}><span className="font-bold text-xl"><CiMail/></span> <span className="hidden md:block">Mohammed.tarek.rezk@gmail.com</span></Link>
              <Link className='center gap-2 text-white' to={"mailto:mohammed.tarek.rezk@gmail.com"}><span className="font-bold text-base"><FiPhoneCall /></span>  <span className="hidden md:block">+201023069980</span> </Link>
            </div>
            <div className='center gap-4' ref={rightAn}>
              <Link className='center gap-1 text-white' to={MAIN_LINKS.login}>Login<span className="font-bold text-base"><FaUser /></span></Link>
              <Link className='center gap-1 text-white' to={MAIN_LINKS.wishlist}>Wishlist<span className="font-bold text-xl"><HiHeart /></span></Link>
              <Link className='center gap-1 text-white' to={MAIN_LINKS.cart}>cart <span className="font-black text-base"><FaShoppingCart /></span></Link>
            </div>
          </div>
        </Container>
      </div>

        <div ref={upAn}>

        <Container className="hidden md:center md:justify-between py-3" >
            <Logo />
            <HeaderNav />
            <Search />
        </Container>

        <Container className={`md:hidden center justify-between py-2 relative`} >
          <Logo />
          <button onClick={toggleHandler} className='text-2xl font-bl text-text'>{toggle? <FaX /> : <CgMenuGridR />}</button>
          {toggle && <PopNav />}
        </Container>
        </div>

    </header>
  )
}

export default Header