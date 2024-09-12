import React, { useState } from 'react'
import Container from './Container'
import { useGetAllProductsQuery } from '../store/Apis/productsApi';
import SlideElem from './SlideElem';
import { Autoplay,Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import BoxLoading from './loadings/BoxLoading';

function HomePageSlider() {
    let {data , isLoading , isSuccess} = useGetAllProductsQuery({limit: 4 , sortBy:"title" })
    let [sw , setSw] = useState();
    let [active , setActive] = useState(1);
  return !isLoading && isSuccess ? (
    <div className='bg-SkyBlue '>
        <Container className={"relative"} >
        <Swiper
      modules={[Autoplay,Navigation, Pagination ,A11y]}
      spaceBetween={50}
      rewind={true}
      slidesPerView={1}
      navigation={{
        prevEl: ".pre",
        nextEl: ".next"
      }
      }
      pagination={ {
        clickable: true,
        el:'.pagination-container',
        bulletClass: "pag-unact",
        bulletActiveClass: "pag-act"
        
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) =>{setSw(swiper)}}
    >
                {data?.products?.map((el)=>(
                    <SwiperSlide key={el} >
                        <SlideElem category={el.category} image={el.images[0]}/>
                    </SwiperSlide>
                    ))}
     </Swiper>
             <div className='pagination-container'>
             </div>
        </Container>
    </div>
  ): <BoxLoading className=' h-[400px] md:h-[500px] bg-[#ECD2FA] opacity-35' />
}

export default HomePageSlider