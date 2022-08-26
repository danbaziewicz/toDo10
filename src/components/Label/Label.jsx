import React from 'react'

const Label = ({texto, style}) => {
  return (
    <label className={style}>{texto}</label>
  )
}

export default Label