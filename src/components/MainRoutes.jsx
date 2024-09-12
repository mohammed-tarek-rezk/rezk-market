import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound'
import ScrollToTop from './ScrollToTop'

export const MAIN_LINKS = {
  home: "/",
  login: "/login",
  wishlist: "/wishlist",
  cart: "/cart",
  products: "/products",
  blogs: "/blogs",
  contact: "/contact",
  about: "/about",
  facebook: "https://www.facebook.com/profile.php?id=100016827072658",
  whatsapp: "https://wa.me/01023069980",
  linkedin: "https://www.linkedin.com/in/mohamed-tarek-rezk/",
  telegram: "https://t.me/mohamedtarek229",
  instagram:""
}



function MainRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
  )
}

export default MainRoutes