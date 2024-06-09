import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const DropDown = ({ options }) => {

const defaultOption = options[0];
  return (
   <Dropdown 
      options={options} 
      value={defaultOption} 
      placeholder="Select an option" 
      className='md:w-[250px] w-[150px]'
      controlClassName='bg-bgWhite rounded-lg'
   />
  )
}

export default DropDown