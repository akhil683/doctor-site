import React, { useState } from 'react'
import Input from '../Input'
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'

const BookAppointment = () => {

   const [ form, setForm ] = useState({
      name: "",
      email: "",
      number: "",
   })

const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setForm(values => ({...values, [name]: value}))
  }

  return (
    <section className='p-6 my-8 flex justify-center items-center max-md:flex-col gap-12 border border-lightGray mx-8'>

     <div className='max-w-[450px]'>
         <FramerDown>
         <h3 className='md:text-4xl text-3xl font-semibold mb-4'>
            Book an Appointment
         </h3>
         </FramerDown>

         <FramerUp>
         <p className='mb-4 text-gray md:text-lg'>
            Take your first step towards a healthier life. Book a free appointment now !
         </p>
         </FramerUp>
      </div> 

      <FramerUp>
      <form className='max-w-[500px] w-full flex gap-2 flex-col'>
         <div className='flex gap-2 max-md:flex-col'>
         <Input
            type="text"
            name="name"
            value={form.name}
            placeholder="Name"
            onChange={handleChange}
         />
         <Input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
         />
         </div>
         <Input
            type="number"
            name="number"
            value={form.number}
            placeholder="Mobile Number"
            onChange={handleChange}
         />
         <button className='py-4 text-xl hover:bg-orange bg-black duration-200 w-full rounded-lg  text-white'>Book Appointment</button>
      </form> 
      </FramerUp>
    </section>
  )
}

export default BookAppointment
