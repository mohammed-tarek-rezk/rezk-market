import React from 'react'

function BoxLoading({className = ""}) {
  return (
    <div className={` animate-pulse bg-gray-200 rounded-lg w-full ${className}`}></div>
  )
}

export default BoxLoading