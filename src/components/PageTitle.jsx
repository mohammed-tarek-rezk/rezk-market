import React from 'react'
import Container from './Container'

function PageTitle({title}) {
  return (
    <div className='bg-lightBlue py-12 my-3'>
        <Container >
            <h1 className=' text-xl md:text-3xl  font-bold text-text capitalize'>{title}</h1>
        </Container>
    </div>
  )
}

export default PageTitle