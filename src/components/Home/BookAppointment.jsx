import React, { useState } from 'react'
import Input from '../Input'
import FramerDown from '../Framer/FramerDown'
import FramerUp from '../Framer/FramerUp'
// import DropDown from '../DropDown'
import { addDoc } from 'firebase/firestore'
import { appointmentRef } from '../../firebase/firebase'
import Swal from 'sweetalert2'

const BookAppointment = () => {
   const [ loading, setLoading ] = useState(false)

   // const options = ["Diabetes Reversal", "Weight Loss", "Weight Gain", 'PCOD/PCOS Reversal']
   // const gender = ["Male", "Female", "Other"]

   const [ form, setForm ] = useState({
      name: "",
      number: "",
      email: "",
   })

   const submitForm = async (e) => {
      e.preventDefault()
      try {
         setLoading(true)
         await addDoc(appointmentRef, form)
         Swal.fire({
            title: "Demo Booked !",
            icon: "success",
         })
         setLoading(false)
      } catch (err) {
         console.log(err)
         Swal.fire({
            title: "Error",
            icon: "error",
         })
      }
   } 

const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setForm(values => ({...values, [name]: value}))
  }

  return (
    <section className='p-12 max-md:px-4 pb-20 my-8 border border-lightGray mx-8 relative'>

         <FramerDown>
         <h3 className='md:text-3xl text-2xl font-semibold mb-4'>
            Book a Demo !
         </h3>
         </FramerDown>

         <FramerUp>
         <p className='text-gray md:text-lg'>
            Take your first step towards a healthier life. Book a free appointment now !
         </p>
         </FramerUp>

      <FramerUp>
      <form className='my-12 w-full flex gap-6 flex-col' onSubmit={submitForm}>
         <div className='flex gap-6 max-md:flex-col'>
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
         <div className='flex gap-6 max-md:flex-col'>
         <Input
            type="number"
            name="number"
            value={form.number}
            placeholder="Mobile Number"
            onChange={handleChange}
         />
         </div>
        <div className='flex justify-between flex-wrap gap-6'>
         <div className='flex gap-6 flex-wrap'>
            {/* <DropDown options={options} /> 
            <DropDown options={gender} />  */}
         </div> 
         {/* <input
            type='time' 
            name='time'
            value={form.time} 
            placeholder='Preferred time to Call' 
           onChange={handleChange} 
            className='p-3 rounded-lg placeholder:text-gray bg-bgWhite focus:bg-white outline-gray border border-lightGray text-lg'
         />  */}
         </div> 
         <button type='submit' className='absolute bottom-6 right-6 py-4 w-[220px] md:text-xl text-lg hover:bg-orange bg-black duration-200 rounded-full text-white'>
            {loading ? "Loading..." : "Book Demo"}
         </button>
      </form> 
      </FramerUp>
    </section>
  )
}

export default BookAppointment
