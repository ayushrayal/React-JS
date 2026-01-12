import React from 'react'
import LeftSideContent from './LeftsideContent'
import RightSideContent from './RightSideContent'
const Center = () => {
  return (
    <div className='py-10 px-18 h-[90vh] flex gap-10 items-center'>
      <LeftSideContent />
      <RightSideContent />
    </div>
  )
}

export default Center
