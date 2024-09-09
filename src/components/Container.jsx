import React from 'react'

function Container(props) {
  return (
    <div className={`container m-auto lg:max-w-[1200px] px-3 ${props.className || ""}`}>{props.children}</div>
  )
}

export default Container