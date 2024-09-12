import React from 'react'

function PayTableRow({title , value}) {
  return (
    <div className='flex justify-between items-center p-3 border-b border-gray-200 font-bold'><span>{title}</span> <span>{value}</span></div>
  )
}

export default PayTableRow