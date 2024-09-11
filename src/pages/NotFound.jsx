import React, {  useRef, useState } from 'react'
import {  PageTitle, Container } from '../components'
import { IMAGES_LINKS } from '../services/imagesServices'
import BoxLoading from '../components/loadings/BoxLoading'



function NotFound() {
  let [loading , setLoading] = useState(true)
  let image = useRef()


  let loadingHandler = (e)=>{  
    e.target.classList.remove("hidden")
    setLoading(false)
  }
  return(
    <div>
      <PageTitle title={"404 Not Found"}/>
      <Container className={"center"}>
          {loading && <BoxLoading className='h-[400px] md:[600px]' /> }
          <img src={IMAGES_LINKS.notFound} className='hidden h-[400px] md:h-[600px] object-cover' onLoad={loadingHandler} ref={image}  />
      </Container>
    </div>
  )
}

export default NotFound