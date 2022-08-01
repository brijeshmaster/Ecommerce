import React from 'react'
import  ShoppingCart  from '@material-ui/icons/ShoppingCart'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='h-14 w-auto bg-slate-50 color-red  flex items-center justify-center  '>
MY CART
    </div>
<header className="text-gray-600 body-font shadow-lg  rounded-full border-2">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
        {/* <img src="b3.png" alt="" className='h-12 '/> */}
      <span className="ml-3 text-xl font-bold">MY CART</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <NavLink to='/' className="mr-5 hover:text-gray-900">Home</NavLink>
      {/* <NavLink to='/Sale' className="mr-5 hover:text-gray-900">Sale</NavLink> */}
      <NavLink to='/About' className="mr-5 hover:text-gray-900">About</NavLink>
      <NavLink to='/Contact' className="mr-5 hover:text-gray-900">Contact</NavLink>
    </nav>
    <ShoppingCart fontSize='large' />
    <span>0</span>
  </div>
</header>

</>
  )
}

export default Navbar