import React from 'react'
import { Link } from 'react-router-dom'

import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { IoCallOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className='bg-black px-6 text-bgWhite'>
      <div className='flex justify-between flex-wrap gap-16 md:px-16 py-16 text-xl'>
        <div>
          <p className='text-gray mb-6 text-lg'>Features</p>
          <div className='flex flex-col gap-4'>
            <Link to="/our-clinics" className='text-lightGray hover:text-white'>
              Our Clinics
            </Link>
            <Link to="/features" className='text-lightGray hover:text-white'>
              Programs
            </Link>
            <Link to="/health-tracking" className='text-lightGray hover:text-white'>
              Health Tracking
            </Link>
            <Link to="/locker" className='text-lightGray hover:text-white'>
              Locker
            </Link>
          </div>

          {/* <div className='mb-6'>
            <p className='mb-2'>Weight Management</p>   
            <Link to="/" className='px-6 text-lg text-lightGray hover:text-white duration-100'>Weight Loss</Link>
          </div>          
          <div className='mb-6'>
            <p className='mb-2'>Disease Management</p>   
            <Link to="/" className='px-6 text-lg text-lightGray hover:text-white duration-100'>Diabetes</Link>
              <br />
            <Link to="/" className='px-6 text-lg text-lightGray hover:text-white duration-100'>PCOS/PCOD Reversal</Link>
          </div>          
          <div className='mb-4'>
            <p className='mb-2'>For doctors</p>   
            <Link to="/" className='px-6 text-lg text-lightGray hover:text-white duration-100'>Electronic Health Records</Link>
          </div>           */}
        </div>
        <div>
          <p className='mb-6 text-gray text-lg'>Company</p>
          <div className='flex flex-col gap-4'>
            <Link to="/" className='text-lightGray hover:text-white'>Home</Link>
            <Link to="/" className='text-lightGray hover:text-white'>Terms & Conditions</Link>
            <Link to="/" className='text-lightGray hover:text-white'>Privacy Policy</Link>
            <Link to="/" className='text-lightGray hover:text-white'>Refund Policy</Link>
          </div>
        </div>
        <div>
          <p className='mb-6 text-gray text-lg'>Contact Us</p>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4 text-lightGray hover:text-white'>
              <IoCallOutline />
              +91 [PHONE NUMBER]
            </div>
            <div className='flex gap-4 text-lightGray hover:text-white'>
              <FaRegAddressCard />
              [Address]
            </div>
            <div className='flex gap-4 text-lightGray hover:text-white'>
              <HiOutlineMail />
              [Email]
            </div>
          </div>
        </div>
      </div>

      <hr className='text-gray' />

      <div className='flex justify-between items-center py-16 md:px-16 px-4 max-md:flex-col-reverse gap-12'>
        <p className='text-sm text-lightGray'>@2023 [App Name]. All Rights Reserved.</p>   
        <div className='flex gap-4 text-2xl'>
          <a href="" className='hover:text-orange duration-100'>
            <AiFillInstagram />
          </a>
          <a href="" className='hover:text-orange duration-100'>
            <FaYoutube />
          </a>
          <a href="" className='hover:text-orange duration-100'>
            <FaSquareXTwitter />
          </a>
        </div>
      </div> 
    </footer>
  )
}

export default Footer
