import React from 'react'
import proImg from '../../Assets/imges/IMG-20220329-WA0017.jpg'

const InfoNav = () => {
  return (
    <>
    <div className=' col-md-3 bg-white rounded-3 mb-3'>
    <div className='w-50 mx-auto position-relative'>
      <img src={proImg} className='w-100 border-2 border-primary  mt-2 rounded-3 img-thumbnail '/>
   
    </div>
      <div className='mb-1 p-1'>
  
    <div  className=' '>
      <h3 className=' text-center  h4 fw-bold'>Khaled Sherif </h3>
      <h5 className=' text-center bg-body-secondary rounded-3 h6 mx-2 py-1'> Junior Front-end Devoloper</h5>
      <div className=' text-center fs-4 fw-bold'>
        <a href="https://www.linkedin.com/in/khaled-sherif-37588a216/" target='_blank'><i className="fa-brands fa-linkedin mx-2"></i></a>
        <a href=" https://github.com/khaledsherif97" target='_blank'><i className="fa-brands fa-github mx-2"></i></a>
      </div>
    </div>
    <div className='bg-body-secondary rounded-3'>
      <p><span><i className="fa-solid fa-mobile-screen m-1 fs-4 fw-bold bg-white p-2 rounded-3 "></i></span> +201012805104<p className='ps-5'>+201555348023</p></p>
      <p><span><i className="fa-solid fa-envelope-open-text m-1 fs-4 fw-bold bg-white p-2 rounded-3"></i></span> ksherif890@gmail.com</p>
      <p><span><i className="fa-solid fa-map-location-dot m-1 fs-4 fw-bold bg-white p-2 rounded-3"></i></span> Miami ,Alexanderia ,Egypt</p>
      <p><span><i className="fa-solid fa-calendar-days m-1 fs-4 fw-bold bg-white p-2 rounded-3"></i></span> 6th November 1997</p>
  
    </div>
    <div className=' mx-auto w-50'>
      <a href='Khaled Sherif Front_end CV .pdf' download="Khaled Sherif Front_end CV .pdf">
    <button className=' btn btn-primary rounded-3 mb-2'> Download CV</button></a>
    </div>
    </div>
    </div>
    </>
  )
}

export default InfoNav