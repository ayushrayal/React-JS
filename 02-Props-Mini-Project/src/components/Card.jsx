import React from 'react';
import { UserRound, Bookmark, Plus } from 'lucide-react';
const Card = () => {
  return (
    <div className="card">
      <img src="src/assets/nehajethwani.jpg" alt="" />
      <h2>Neha Jethwani</h2>
      <p>TikTok star known for posting expressive lip sync videos and dramatic edits, often featuring slow motion action.</p>
      <div className='bottom'>
        <div className="one"><UserRound /><span>1.9m</span></div>
        <div className="two"><Bookmark /><span>210k</span></div>
        <button><span>Follow</span><Plus /></button>
      </div>
    </div>
  )
}

export default Card
