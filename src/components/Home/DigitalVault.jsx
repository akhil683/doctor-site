import React from 'react'
import DigitalImg from '../../assets/one-locker.png'

const DigitalVault = () => {
  return (
    <section className='my-16 flex justify-around items-center max-md:flex-col-reverse gap-16 px-8'>
      <div className='max-w-[450px]'>
         <h3 className='md:text-3xl text-2xl font-semibold mb-4'>
            Manage your all Medical Records from a Single, Secure Digital Vault
         </h3>
         <p className='mb-4 text-gray md:text-lg'>
            Discover the convenience of having all your medical records securely stored and easily accessible in one place with our comprehensive digital medical records storage solution. Simplify your healthcare journey by effortlessly managing and retrieving your entire medical history whenever you need it
         </p>
         <button className='px-8 py-3 text-lg rounded-full border border-lightGray'>
            Learn more 
         </button>
      </div>
      <div className='md:h-[300px] max-md:w-full'>
         <img src={DigitalImg} alt="Preventive Care Programs" className='h-full w-full object-cover' />
      </div>
    </section>
  )
}

export default DigitalVault
