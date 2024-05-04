import React from 'react'
import logo from "../../Assets/imges/img.jpeg"
const NotFound = () => {
  return (
    <div className=' col-md-8 z-1 text-center '>
    <div className=' bg-white bg-opacity-75 border border-3 border-primary  rounded-3 p-5'>
      <h2 className=' text-primary fw-bold fs-1'>error 404 </h2>
      <h4 className='my-5'>Choose from this side navbar        <i class="fa-solid fa-right-long"></i>     <i class="fa-solid fa-right-long"></i></h4>
      <div className='w-50 mx-auto '>
      <img src={logo} className='w-100 rounded-4' />
      </div>
    
      </div>
    </div>
  )
}

export default NotFound