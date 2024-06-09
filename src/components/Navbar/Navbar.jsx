import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [ showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className='fixed top-0 w-full z-40 bg-white md:h-[75px] h-[65px] border-b border-lightGray flex md:justify-around justify-between items-center md:px-20 px-4'>

      <div className='flex justify-center items-center gap-4'>
        <Link to="/">
          <h2 className='md:text-3xl text-2xl font-semibold text-orange'>
            App Name
          </h2>
        </Link> 
        
        <button className='py-2 px-6 border border-lightGray md:text-lg rounded-full text-sm'>
          For Doctors
        </button>
      </div>  
      <ul className='flex justify-center max-md:hidden items-center gap-6 text-xl text-gray'>
        <li className='hover:text-black'>
          <Link to="/our-clinics">
            Our Clinics
          </Link>
        </li>
        <li className='hover:text-black'>
          <Link to="/features">
            Programs
          </Link>
        </li>
        <li className='hover:text-black'>
          <Link>
            Health Tracking
          </Link>
        </li>
        <li className='hover:text-black'>
          <Link>
            Locker
          </Link>
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
