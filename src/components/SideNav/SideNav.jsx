import { Fade } from 'animation-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className=' col-md-1 z-1 bg-white bg-opacity-75 border border-3 border-primary  rounded-3 mb-3'>  
<Fade 
        type="right"
        translate="200px"
        delay={0.5}
        duration={0.5}
        isRepeat={false}
> 
    <ul className="navbar-nav ms-auto mt-5">
    <li className="nav-item bg-body-secondary rounded-3 my-3">
    <Link className="nav-link text-center fw-bold " aria-current="page" to={''}>
    <i class="fa-solid fa-user fs-2 pt-1 "></i>
    <p>About</p>
    </Link>
    </li>
   
    <li className="nav-item nav-item bg-body-secondary rounded-3 my-3">
    <Link className="nav-link text-center fw-bold " aria-current="page" to={'resmue'}>
    <i class="fa-solid fa-file fs-2 pt-1"></i>
    <p>Resume</p>
    </Link>
    </li>
    <li className="nav-item nav-item bg-body-secondary rounded-3 my-3 ">
    <Link className="nav-link text-center fw-bold " aria-current="page" to={'projects'}>
    <i class="fa-brands fa-react fs-1 pt-1"></i>
    
    <p>Projects</p>
    </Link>
    </li>
    </ul>
</Fade>
  </div>
  )
}

export default SideNav