import React, { useEffect, useRef, useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

function ProductCard({product}) {
    let card = useRef()
    let [showDetails , setShowDetails]= useState(false)
    let discount = (product.price * product.discountPercentage / 100).toFixed(2)


    useEffect(()=>{
        // document.addEventListener("mouseleave")
        card.current.addEventListener("mouseenter",(e)=>{
            e.target.classList.add("scale-105")
            setShowDetails(true)
        })
        card.current.addEventListener("mouseleave",(e)=>{
            e.target.classList.remove("scale-105")
            setShowDetails(false)
        })
    },[])
  return (
    <div className='  bg-white shadow-md  rounded-md overflow-hidden relative transition-all' ref={card}>
        <div className='bg-SkyBlue bg-opacity-30'>
        <div className='flex gap-10 p-5'>
            <span className='z-[2] md:text-lg card-icon relative '><FiShoppingCart /></span>
            <span className='z-[2]  md:text-lg card-icon relative '><FaRegHeart /></span>
        </div>
        <div className='h-[200px] md:h-[250px] center '>
            <img src={product.images[0]} className="h-full object-cover"/>
        </div>
        </div>
        <div className='text-center py-5'>
            <h4 className='text-pink truncate font-bold  text-lg'>{product.title}</h4>
            <p className='text-text truncate py-2'>Code: {product.sku}</p>
            <p className='text-sm'><span className='text-text truncate '>${(product.price - discount).toFixed(2)}</span> <span className='text-pink line-through'>${product.price}</span></p>
        </div>
        {showDetails && (
            <React.Fragment>
                <button className='btn bg-green-600 text-white absolute z-20 top-[250px] left-[50%] -translate-x-1/2 font-bold'>  Show Details  </button>
            </React.Fragment>
            )}
    </div>
  )
}

export default ProductCard