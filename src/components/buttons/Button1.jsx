import React from 'react'

export const Button1 = ({title, style, action}) => {
  return (
    <button onClick={action} className={style}>{title}</button>
  )
}
