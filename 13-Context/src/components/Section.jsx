import React, { useContext } from 'react'
import { UserDataContext } from '../context/Userdata'

const Section = () => {
    const user = useContext(UserDataContext)
  return (
    <div className='section'>
      <h1>{user}</h1>
    </div>
  )
}

export default Section
