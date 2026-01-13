import React from 'react'
const Card = (props) => {
  return (
    <div className='h-80 w-80 bg-green-900 rounded-md relative overflow-hidden'>
      <img className=' w-full object-cover object-center' src={props.imageSrc} alt="n1" />
    </div>
  )
}

export default Card
