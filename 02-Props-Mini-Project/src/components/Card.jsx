import React from 'react';
import { UserRound, Bookmark, Plus } from 'lucide-react';
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h2>{props.user}</h2>
      <p>{props.about}</p>
      <div className='bottom'>
        <div className="one"><UserRound /><span>{props.followers}</span></div>
        <div className="two"><Bookmark /><span>{props.bookmarks}</span></div>
        <button><span>Follow</span><Plus /></button>
      </div>
    </div>
  )
}

export default Card
