import React from 'react'

import { FaAngleDoubleUp } from "react-icons/fa";

const BackToTop = () => {

    const GoUp = () => {
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }
  return (
    <div className='bg-slate-200 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer' onClick={GoUp}>
        <FaAngleDoubleUp color='green' />
    </div>
  )
}

export default BackToTop