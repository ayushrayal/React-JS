import React, { useContext } from 'react'
import { UserDataContext } from '../context/Userdata';

const Navbar = () => {
    const [name, setName] = useContext(UserDataContext);
  return (
    <div className='navbar'>
      <h1>{name}</h1>
    </div>
  )
}

export default Navbar
