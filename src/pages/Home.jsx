import React from 'react'
import Hero from '../components/Home/Hero'
import Carousel from '../components/Carousel'
import Programs from '../components/Home/Programs'
import Care from '../components/Home/Care'
import Operate from '../components/Home/Operate'
import Panchakosha from '../components/Home/Panchakosha'
import PreventiveCare from '../components/Home/PreventiveCare'
import BloodPressure from '../components/Home/BloodPressure'
import DigitalVault from '../components/Home/DigitalVault'
import BookAppointment from '../components/Home/BookAppointment'
import ABHA from '../components/Home/ABHA'
import HealthID from '../components/Home/HealthID'
import Doctor from '../components/Home/Doctor'
import Pharmacy from '../components/Home/Pharmacy'
import LabReport from '../components/Home/LabReport'
import Finance from '../components/Home/Finance'
import Staff from '../components/Home/Staff'
import WhyUs from '../components/Home/WhyUs'

const Home = () => {
  return (
    <>
      <Hero />
      <Programs />
      <Care />
      <Carousel />
      <Operate />

      {/* <h3 className='md:text-5xl text-xl font-semibold text-center md:my-20 my-6'>
                  <span className='text-orange'>Endocrinologist-Led,</span>
                  <br />
                  AI-Powered Personalized Healthcare Programs
                  <span className='text-orange'>.</span>
                </h3> */}

      {/* <Panchakosha /> */}

      {/* <h3 className='md:text-5xl text-3xl text-center font-semibold md:px-24 px-8 mt-20'>
        Unlocking the Future of Fitness: Dive into  Our Connected Ecosytsem
        <span className='text-orange'>.</span>
      </h3>
      <p className='text-gray mt-4 text-center'>Transform Your Well-being Holistically and Embark on a transformative journey like never before</p> */}

      <PreventiveCare />
      <DigitalVault />
      <BloodPressure />
      <ABHA />
      <HealthID />
      <Doctor />
      <Pharmacy />
      <LabReport />
      <Finance />
      <Staff />
      <WhyUs />

      <section id='demo' className='my-12'>
      <div className='my-12'>
        <h3 className='md:text-5xl text-3xl font-semibold text-center'>Experience the Future<span className='text-orange'>.</span>
        </h3>
        <p className='text-gray text-lg my-4 text-center px-4'>
          Fill the form and book an appointment with our experts to get instant feedback !
        </p>
      </div>
      <BookAppointment />
      </section>
    </>
  )
}

export default Home
