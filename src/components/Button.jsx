import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='p-5 m-2 rounded-lg bg-gray-100'>{name}</button>
    </div>
  )
}

export default Button
