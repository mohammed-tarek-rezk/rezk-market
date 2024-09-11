
import { useEffect, useState } from 'react'
import { Container ,BoxLoading } from '../components'

function Loading() {
  let [boxs , setboxs] = useState()

  let changeBoxsCount = ()=>{
    switch(true){
      case window.innerWidth >= 1024:
        setboxs(3)
        break;
      case window.innerWidth >= 768:
        setboxs(2)
        break;
      case window.innerWidth < 768:
        setboxs(1)
        break;
      
    }
  }
  useEffect(()=>{
    changeBoxsCount()
    window.addEventListener("resize",changeBoxsCount)
  },[])
  return (
    <>
      <BoxLoading  className='h-[130px] my-3'/>
      <Container className="bg-gray-50  rounded-lg my-3 p-3">
        <BoxLoading  className='h-[40px] my-3'/>
        <BoxLoading  className='h-[30px] my-3 w-1/2 py-1' />
      </Container>
      <Container >
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          { new Array(boxs).fill(1).map((el , index)=> <BoxLoading key={index} className='h-[200px]'/>)
          }
        </div>
    </Container>
    </>
  )
}

export default Loading