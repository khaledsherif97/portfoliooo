import React from 'react'
import InfoNav from './../InfoNav/InfoNav';
import { Outlet } from 'react-router-dom';
import SideNav from './../SideNav/SideNav';





const LayOut = () => {
  return (
    <div  className=' my-0 '>
    
    <div className=' container py-1'>
  <div className=' py-4 row'>
 
 <InfoNav/>
 <Outlet/>
 <SideNav/>
 </div>
 </div>
 </div>
)
  
}

export default LayOut 