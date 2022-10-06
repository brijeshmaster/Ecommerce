import React, { useContext } from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import {NavLink} from 'react-router-dom'
import {CartContext} from '../App'
import Toggle from './Toggle';

const Navbar = () => {
  const {Items} = useContext(CartContext)
  console.log(Items);

  return (
    <>
<header className="text-gray-600 body-font shadow-lg  rounded-full border-2 sticky top-0 z-30 bg-white">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-xl font-bold"><NavLink to="/">MEGA STORE</NavLink></span>
    </div>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <NavLink to='/' className="mr-5 hover:text-gray-900">Home</NavLink>
      <NavLink to='/About' className="mr-5 hover:text-gray-900">About</NavLink>
      <NavLink to='/Contact' className="mr-5 hover:text-gray-900">Contact</NavLink>
    </nav>
    <AiOutlineShoppingCart size={25}  />
    <button
  type="button"
  className="inline-flex relative items-center p-3 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none  "
>

  <div className="inline-flex absolute -top-4 right-3 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
    {Items.length}
  </div>
</button>


  </div>
  
  <div>
<Toggle />
  </div>
</header>

</>
  )
}

export default Navbar