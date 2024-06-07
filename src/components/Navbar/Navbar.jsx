import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [ showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className='fixed w-full z-40 bg-white md:h-[80px] h-[70px] border-b border-lightGray flex md:justify-around justify-between items-center md:px-20 px-4'>

      <div className='flex justify-center items-center gap-4'>
        <h2 className='md:text-3xl text-2xl font-semibold text-orange'>App Name</h2>
        <button className='py-2 px-6 border border-lightGray md:text-lg rounded-full text-sm'>
          For Doctors
        </button>
      </div>  
      <ul className='flex justify-center max-md:hidden items-center gap-6 text-xl text-gray'>
        <li className='hover:text-black'>
          Our Clinics
        </li>
        <li className='hover:text-black'>
          Programs
        </li>
        <li className='hover:text-black'>
          Health Tracking
        </li>
        <li className='hover:text-black'>
          Locker
        </li>
      </ul>

      <button className='md:hidden' onClick={() => setShowMenu(!showMenu)}>
        <IoIosMenu className='text-3xl' /> 
      </button>
      <MobileMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </nav>
  )
}

export default Navbar
