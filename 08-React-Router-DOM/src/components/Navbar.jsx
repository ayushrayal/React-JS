import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-30 w-full bg-fuchsia-950 border-b-2 border-amber-50 flex items-center justify-evenly'>
      <Link className='text-5xl text-fuchsia-900 font-semibold uppercase' to="/">Home</Link>
      <Link className='text-5xl text-fuchsia-900 font-semibold uppercase' to="/about">About</Link>
      <Link className='text-5xl text-fuchsia-900 font-semibold uppercase' to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar
