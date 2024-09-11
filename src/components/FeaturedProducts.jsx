import React from 'react'
import {Container, SectionHeader} from './index'
import { Swiper, SwiperSlide  } from 'swiper/react'
import {Autoplay , FreeMode,Grid,Pagination , A11y} from "swiper/modules"
import ProductCard from './ProductCard'
import { useGetAllProductsQuery } from '../store/Apis/productsApi'
function FeaturedProducts() {
  let {data , isLoading} = useGetAllProductsQuery({limit: 8})
  console.log(data)
  return (
    <div>
        <SectionHeader title={"featured products"} />
        <Container className={"my-5 "}>
            <Swiper
            className='py-5 px-2'
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".fePro",
                bulletClass: "f-bu",
                bulletActiveClass: "f-bu-act"
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}

              modules={[Autoplay, Grid,FreeMode, Pagination]}
            >
              {
                data?.products?.map((el, index)=>{
                  return  (
                    <SwiperSlide key={index}>
                      <ProductCard product={el} />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
            <div className='fePro text-center flex gap-2 justify-center flex-nowrap  bottom-3 z-10 w-full'></div>
        </Container>
    </div>
  )
}

export default FeaturedProducts