import React from 'react'
import { FeaturedProducts, HomePageSlider, PageTitle, SectionHeader , ScrollToTop } from '../components'
import { Helmet } from 'react-helmet-async'
import { useGetAllProductsQuery, useGetOneProductQuery } from '../store/Apis/productsApi'
import Loading from './Loading'



function HomePage() {



  return (false) ? <Loading /> : (
    <div>
      <Helmet>
        <title>Rizk Market</title>
        <meta title='description' content='This is the home page of Rezk market app' />
      </Helmet>
      <ScrollToTop />
      <HomePageSlider />  
      <FeaturedProducts />
    </div>
  )
}

export default HomePage