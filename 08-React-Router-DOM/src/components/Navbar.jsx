import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-30 w-full bg-fuchsia-950 border-b-2 border-amber-50 flex items-center justify-evenly'>
      <NavLink className='text-5xl text-fuchsia-900 font-semibold uppercase' style={({ isActive})=>({
        color: isActive?"purple":"white",
        borderBottom:isActive?"3px purple solid":"none"
      })} to="/">Home</NavLink>
      <NavLink className='text-5xl text-fuchsia-900 font-semibold uppercase' style={({ isActive})=>({
        color: isActive?"purple":"white",
        borderBottom:isActive?"3px purple solid":"none"
      })} to="/about">About</NavLink>
      <NavLink className='text-5xl text-fuchsia-900 font-semibold uppercase' style={({ isActive})=>({
        color: isActive?"purple":"white",
        borderBottom:isActive?"3px purple solid":"none"
      })} to="/contact">Contact</NavLink>
    </div>
  )
}

export default Navbar
