import React from 'react'
import { Container, PageTitle, ProductCard } from '../components'
import { useSelector } from 'react-redux'


function WishList() {
    let fav = useSelector((state)=> state.fav)
  return (
    <div>
        <PageTitle title={"Wishlist"} />
        <Container className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-16"} >
            {
             fav?.length === 0 ? <h1 className='text-xl font-bold text-text'>No wishList products</h1> :   fav?.map((p)=><ProductCard  key={p.id} product={p} />
                )
            }
        </Container>
    </div>
  )
}

export default WishList