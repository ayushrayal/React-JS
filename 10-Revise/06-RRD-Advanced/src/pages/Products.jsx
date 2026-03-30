import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const Products = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex justify-center gap-4'>
        <Link to='/products/men'>Men</Link>
        <Link to='/products/women'>Women</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Products
