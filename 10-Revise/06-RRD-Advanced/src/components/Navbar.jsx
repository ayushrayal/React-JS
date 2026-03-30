import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-gray-800 text-white'>
        <h1 className='text-white text-2xl'>Nxtzen</h1>
      <div className='flex items-center gap-10'>
        <Link className=' text-lg' to='/'>Home</Link>
        <Link className=' text-lg' to='/about'>About</Link>
        <Link className=' text-lg' to='/products'>Products</Link>
      </div>
    </div>
  )
}

export default Navbar
