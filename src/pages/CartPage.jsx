import React from 'react'
import { Container, PageTitle , PayTableRow} from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCount, increaseCount, removeFromCart } from '../store/slices/cartSlice'
import { MdAutoDelete } from 'react-icons/md'


function CartPage() {
    let cart = useSelector((st)=> st.cart)
    let dispatch = useDispatch()
  return (
    <div>
        <PageTitle title={"Cart"} />
        <Container className='flex flex-col gap-6 md:flex-row my-10' >
            <div className='flex-grow'>
                <table className='w-full text-center'>
                    <thead className='text-lg'>
                        <th>product</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                    </thead>
                    <tbody>
                        {
                            cart.map((e)=> (
                                <tr key={e.id} className='border-b border-gray-200 pb-3 h-full'>
                                    <td className='min-w-20'>
                                        <div className='max-w-28'>
                                            <div className='center'>
                                                <img className=' h-20 w-20 object-cover' src={e.images[0]}/>
                                            </div>
                                            <div className=' truncate text-sm'>{e.title}</div>
                                        </div>
                                    </td>
                                    <td>${e.price.toFixed(2)}</td>
                                    <td className='text-center' unselectable='on'>
                                        <div className='h-full center gap-1'>
                                            <span className='icon-tem w-6 h-6' onClick={()=> dispatch(decreaseCount(e.id))} >-</span><span className='icon-tem'>{e.orderCount}</span><span onClick={()=> dispatch(increaseCount(e.id))} className='icon-tem w-6 h-6'>+</span>
                                        </div>
                                    </td>
                                    <td>${(e.orderCount * e.price).toFixed(2)}</td>
                                    <td><span onClick={()=> dispatch(removeFromCart(e.id))} className='icon-tem text-red-500'><MdAutoDelete /></span></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='p-5 bg-[#F4F4FC] rounded-xl'>
                <PayTableRow title={`Total:`} value={`$${cart.reduce((acc , el)=> acc + (el.price * el.orderCount) ,0).toFixed(2)}`}/>
                <PayTableRow title={`SubTotal:`} value={`$${cart.reduce((acc , el)=> acc + (el.price * el.orderCount * (100 - el.discountPercentage || 1) / 100) ,0).toFixed(2)}`}/>
                <PayTableRow title={`Discount Amout:`} value={`$${cart.reduce((acc , el)=> acc + (el.price * el.orderCount * (el.discountPercentage || 1) / 100) ,0).toFixed(2)}`}/>
                <div>
                    <form className='flex gap-3 my-2 '>
                        <input className='flex-grow h-10 rounded-lg px-2 placeholder:text-subtitle focus:outline-none' placeholder='I have coupon'/>
                        <button type='button' className='h-10 px-2 rounded-lg text-white  py-2 flex bg-pink flex-grow center'>Apply</button>
                    </form>
                </div>
                <button className='h-12 px-2 rounded-lg text-white  py-2  bg-skygreen flex-grow my-3 w-full text-center'>Process To Pay ${cart.reduce((acc , el)=> acc + (el.price * el.orderCount * (100 - el.discountPercentage || 1) / 100) ,0).toFixed(2)}</button>
            </div>
        </Container>
    </div>
  )
}

export default CartPage