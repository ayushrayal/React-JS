import React from 'react'

const Card = (props) => {
  return (
    <article className='card'>
      <div className='card-image'>
        <img src={props.img} alt={props.name} />
      </div>

      <div className='card-body'>
        <h2 className='card-title'>{props.name}</h2>
        <p className='card-description'>{props.description}</p>
      </div>
    </article>
  )
}

export default Card
