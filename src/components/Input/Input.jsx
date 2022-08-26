import React from 'react'

const Input = ({type, style, name}) => {
  return (
    <input className={style} type={type} name={name}/>
  )
}

export default Input