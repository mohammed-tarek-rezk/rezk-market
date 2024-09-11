import React, { useReducer, useRef, useState } from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import BoxLoading from './loadings/BoxLoading'

function SlideElem({category, image}) {
   let [loading , setLoading] = useState(true)
   let img = useRef()

   let loadingHandler =(e)=>{
        e.target.classList.remove("hidden")
        setLoading(false)
   }
  return (
    <Container className='flex flex-col-reverse md:flex-row gap-2 md:px-6  h-[400px] md:h-[500px]'>
        <div className='md:basis-1/2 flex flex-col gap-4 justify-center  flex-grow md:flex-grow-0 md:p-5'>
            <p className=' text-pink capitalize font-Lato gap-2'>Best {category} for you......</p>
            <h3 className='font-bold text-2xl md:text-4xl  capitalize '>New {category} collection <br/> Trends in {new Date().getFullYear()}</h3>
            <Link className='btn  capitalize w-fit'>shop now</Link>
        </div>
        <div className='center slider-image relative md:basis-1/2'>
        {loading? <BoxLoading className='h-[200px] md:h-[400px] bg-white opacity-0' />: ""}
        <img src={image} className='z-[2]  object-cover h-[200px] md:h-[400px] hidden ' onLoad={loadingHandler} ref={img}/>
        </div>
    </Container>
  )
}

export default SlideElem