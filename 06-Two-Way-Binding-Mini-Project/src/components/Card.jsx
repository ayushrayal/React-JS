import React from 'react'

const Card = (props) => {
    
    
  return (
    <div className='h-25 w-100 bg-gradient-to-l from-gray-700 via-gray-900 to-black rounded-md flex justify-start gap-5 items-center' >
  <img className='h-25 w-25 p-2 object-cover object-top rounded-full' src={props.profile} alt={props.name || 'profile'} />
  <div>
    <h1 className='text-white font-bold text-xl'>{props.name}</h1>
    <h5 className='text-gray-200'>{props.email}</h5>
  </div>
  <button onClick={props.onDelete} className='text-3xl font-semibold text-shadow-gray-300 active:scale-90' aria-label="Delete"><i class="ri-delete-bin-7-line"></i></button>
    </div>
  )
}

export default Card
