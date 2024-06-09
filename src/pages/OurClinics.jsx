import React from 'react'
import Operate from '../components/Home/Operate'
import GetInTouch from '../components/Features/GetInTouch'
import ClinicCare from '../components/Clinic/ClinicCare'
import RemoteCenter from '../components/Clinic/RemoteCenter'
import DoorStep from '../components/Clinic/DoorStep'

const OurClinics = () => {

  return (
   <>
      <ClinicCare />
      <DoorStep />
      <RemoteCenter />
     <Operate />
     <GetInTouch />
   </>
  )
}

export default OurClinics
