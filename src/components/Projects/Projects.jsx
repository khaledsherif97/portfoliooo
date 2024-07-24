import React from 'react'
import Slider from 'react-slick'
import d1 from "../../Assets/imges/daniel/Daniel-1.png"
import d8 from "../../Assets/imges/daniel/Daniel-8.png"
import d2 from "../../Assets/imges/daniel/Daniel-2.png"
import d3 from "../../Assets/imges/daniel/Daniel-3.png"
import d4 from "../../Assets/imges/daniel/Daniel-4.png"
import d5 from "../../Assets/imges/daniel/Daniel-5.png"
import d6 from "../../Assets/imges/daniel/Daniel-6.png"
import d7 from "../../Assets/imges/daniel/Daniel-7.png"
import q1 from "../../Assets/imges/Quote1.png"
import q2 from "../../Assets/imges/Quote2.png"
import b1 from "../../Assets/imges/book1.png"
import b2 from "../../Assets/imges/book2.png"
import b3 from "../../Assets/imges/book3.png"

import c1 from '../../Assets/imges/chef/shefooo.png'
import c2 from '../../Assets/imges/chef/chef2.png'
import c3 from '../../Assets/imges/chef/chef3.png'
import c4 from '../../Assets/imges/chef/chef4.png'
import c5 from '../../Assets/imges/chef/chef5.png'
import c6 from '../../Assets/imges/chef/chef6.png'
import c7 from '../../Assets/imges/chef/chef7.png'
import c8 from '../../Assets/imges/chef/chef8.png'

import e1 from "../../Assets/imges/fresh cart/ee1.png"
import e2 from "../../Assets/imges/fresh cart/ee2.png"
import e3 from "../../Assets/imges/fresh cart/e1.png"
import e4 from "../../Assets/imges/fresh cart/e2.png"
import e5 from "../../Assets/imges/fresh cart/e3.png"
import e6 from "../../Assets/imges/fresh cart/e4.png"
import e7 from "../../Assets/imges/fresh cart/e5.png"
import e8 from "../../Assets/imges/fresh cart/e6.png"
import e9 from "../../Assets/imges/fresh cart/e7.png"
import e10 from "../../Assets/imges/fresh cart/e8.png"
import h1 from '../../Assets/imges/hospital/h1.png'
import h2 from '../../Assets/imges/hospital/h2.png'
import h3 from '../../Assets/imges/hospital/h3.png'
import h4 from '../../Assets/imges/hospital/h4.png'
import h5 from '../../Assets/imges/hospital/h5.png'
import h6 from '../../Assets/imges/hospital/h6.png'
import h7 from '../../Assets/imges/hospital/h7.png'
import h8 from '../../Assets/imges/hospital/h8.png'
import h9 from '../../Assets/imges/hospital/h9.png'
import m1 from "../../Assets/imges/m1.png"
import m2 from "../../Assets/imges/m2.png"
import m3 from "../../Assets/imges/m3.png"
import m4 from "../../Assets/imges/m4.png"
import w1 from "../../Assets/imges/w1.png"
import w2 from "../../Assets/imges/w2.png"
import p1 from "../../Assets/imges/event/p1.png"
import p2 from "../../Assets/imges/event/p2.png"
import p3 from "../../Assets/imges/event/p3.png"
import p4 from "../../Assets/imges/event/p4.png"
import p5 from "../../Assets/imges/event/p5.png"
import meal1 from '../../Assets/imges/meal1.png'
import meal2 from '../../Assets/imges/meal2.png'
import meal3 from '../../Assets/imges/meal3.png'
import meal4 from '../../Assets/imges/meal4.png'
import meal5 from '../../Assets/imges/meal5.png'
import dd1 from "../../Assets/imges/dev/d1.png"
import dd2 from "../../Assets/imges/dev/d2.png"
import dd3 from "../../Assets/imges/dev/d3.png"
import dd4 from "../../Assets/imges/dev/d4.png"
import dd5 from "../../Assets/imges/dev/d5.png"
import dd6 from "../../Assets/imges/dev/d6.png"
import dd7 from "../../Assets/imges/dev/d7.png"

import marc1 from "../../Assets/imges/marc/marc-1.png"
import marc2 from "../../Assets/imges/marc/marc-2.png"
import marc3 from "../../Assets/imges/marc/marc-3.png"
import marc4 from "../../Assets/imges/marc/marc-4.png"
import marc5 from "../../Assets/imges/marc/marc-5.png"
import marc6 from "../../Assets/imges/marc/marc-6.png"

import { Fade, Text } from 'animation-react'

const Projects = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
  return (
    <div className=' col-md-8 z-1 '>
      
      <div className=' bg-white bg-opacity-75 border border-3 border-primary  rounded-3 px-4 py-2 '>
      <Fade 
        type="bottom"
        translate="200px"
        delay={0.5}
        duration={0.5}
        isRepeat={false}
      > 
    <h3 className=' text-center text-primary fw-semibold fs-2'><Text 
        value="Projects "
        type="drop"
        delay={0.5}
        duration={0.5}
        isRepeat={false}
        option={""}
      /></h3>
    <Slider {...settings}>

       {/*marc*/}
       <div>
        <div className="row my-2">
          
          <div className="col-md-10">
          <Slider {...settings}>
      <div>
        <img src={marc1} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={marc2} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={marc3} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={marc4} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={marc5} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={marc6} className='w-100 rounded-3'/>
      </div>
    
      
     
    </Slider>
    <a href='https://marc-eg.netlify.app/' target='_blank' className='btn btn-primary text-center w-100 mt-5'>Site Link </a>
          </div>
          <div className="col-md-2 my-auto">
          <div className=' bg-body-secondary text-info text-center rounded-3 my-5 py-3'> <i class="fa-brands fa-react fs-1"></i><p>React</p></div>
          </div>
        </div>
      </div>

      {/*Shifoo*/}
      <div>
        <div className="row my-2">
          <div className="col-md-2 my-auto">
          <div className=' bg-body-secondary text-info text-center rounded-3 my-5 py-3'> <i class="fa-brands fa-react fs-1"></i><p>React</p></div>
          </div>
          <div className="col-md-10">
          <Slider {...settings}>
      <div>
        <img src={c1} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={c2} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={c3} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={c4} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={c5} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={c6} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={c7} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={c8} className='w-100 rounded-3'/>
      </div>
      
     
    </Slider>
    <a href='https://khaledsherif97.github.io/shifoo-chef' target='_blank' className='btn btn-primary text-center w-100 mt-5'>Site Link </a>
          </div>
        </div>
      </div>
      {/*fresh cart*/}
      <div>
        <div className="row my-2">
          
          <div className="col-md-10">
          <Slider {...settings}>
      <div>
        <img src={e1} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={e2} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={e3} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={e4} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={e5} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={e6} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={e7} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={e8} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={e9} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={e10} className='w-100 rounded-3'/>
      </div>
      
     
    </Slider>
    <a href='https://khaledsherif97.github.io/freshCart/' target='_blank' className='btn btn-primary text-center w-100 mt-5'>Site Link </a>
          </div>
          <div className="col-md-2 my-auto">
          <div className=' bg-body-secondary text-info text-center rounded-3 my-5 py-3'> <i class="fa-brands fa-react fs-1"></i><p>React</p></div>
          </div>
        </div>
      </div>
      {/*hospital*/}
      <div>
        <div className="row my-2">
          <div className="col-md-2 my-auto">
          <div className=' bg-body-secondary text-info text-center rounded-3 my-5 py-3'> <i class="fa-brands fa-react fs-1"></i><p>React</p></div>
          </div>
          <div className="col-md-10">
          <Slider {...settings}>
      <div>
        <img src={h1} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={h2} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={h3} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={h4} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={h5} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={h6} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={h7} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={h8} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={h9} className='w-100 rounded-3'/>
      </div>
      
     
    </Slider>
    <a href='https://khaledsherif97.github.io/sherif-hospital/' target='_blank' className='btn btn-primary text-center w-100 mt-5'>Site Link </a>
          </div>
        </div>
      </div>
      {/*movies*/}
      <div>
      <div className="row my-2">
      <div className="col-md-10">
      <Slider {...settings}>
      <div>
        <img src={m1} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={m2} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={m3} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={m4} className='w-100 rounded-3'/>
      </div>
      
      
     
    </Slider>
    <a href='https://khaledsherif97.github.io/Movie-App/' target='_blank' className='btn btn-primary text-center w-100 mt-5'>Site Link </a>
      </div>
      <div className="col-md-2">
        <div className=' bg-body-secondary text-warning text-center rounded-3 py-2 mb-2'> <i class="fa-brands fa-html5 fs-2"></i> <p>HTML5</p></div>
        <div className=' bg-body-secondary text-info text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-css3 fs-2"></i><p>CSS3</p></div>
        <div className=' bg-body-secondary text-primary text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-bootstrap fs-2"></i> <p>Bootstrab</p></div>
        <div className=' bg-body-secondary text-warning text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-js fs-2"></i> <p>JavaScript</p></div>
      </div>
    </div>
      </div>
      {/*weather */}
      <div>
      <div className="row my-2">
    <div className="col-md-2">
        <div className=' bg-body-secondary text-warning text-center rounded-3 py-2 mb-2'> <i class="fa-brands fa-html5 fs-2"></i> <p>HTML5</p></div>
        <div className=' bg-body-secondary text-info text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-css3 fs-2"></i><p>CSS3</p></div>
        <div className=' bg-body-secondary text-primary text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-bootstrap fs-2"></i> <p>Bootstrab</p></div>
        <div className=' bg-body-secondary text-warning text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-js fs-2"></i> <p>JavaScript</p></div>
      </div>
      <div className="col-md-10">
      <Slider {...settings}>
      <div>
        <img src={w1} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={w2} className='w-100 rounded-3'/>
      </div>
     
    </Slider>
    <a href='https://khaledsherif97.github.io/weather/' target='_blank' className='btn btn-primary text-center w-100 mt-5'>Site Link </a>
      </div>
     
    </div>
      </div>
      {/*event*/}
      <div>
      <div className="row my-2">
      <div className="col-md-10">
      <Slider {...settings}>
      <div>
        <img src={p1} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={p2} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={p3} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={p4} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={p5} className='w-100 rounded-3'/>
      </div>
      
      
     
    </Slider>
    <a href='https://khaledsherif97.github.io/event/' target='_blank' className='btn btn-primary text-center w-100 mt-5'>Site Link </a>
      </div>
      <div className="col-md-2">
        <div className=' bg-body-secondary text-warning text-center rounded-3 py-2 mb-2'> <i class="fa-brands fa-html5 fs-2"></i> <p>HTML5</p></div>
        <div className=' bg-body-secondary text-info text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-css3 fs-2"></i><p>CSS3</p></div>
        <div className=' bg-body-secondary text-primary text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-bootstrap fs-2"></i> <p>Bootstrab</p></div>
        <div className=' bg-body-secondary text-warning text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-js fs-2"></i> <p>JavaScript</p></div>
      </div>
    </div>
      </div>
          {/*Quote*/}
          <div>
      <div className="row my-2">
    <div className="col-md-2">
        <div className=' bg-body-secondary text-warning text-center rounded-3 py-2 mb-2'> <i class="fa-brands fa-html5 fs-2"></i> <p>HTML5</p></div>
        <div className=' bg-body-secondary text-info text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-css3 fs-2"></i><p>CSS3</p></div>
        <div className=' bg-body-secondary text-primary text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-bootstrap fs-2"></i> <p>Bootstrab</p></div>
        <div className=' bg-body-secondary text-warning text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-js fs-2"></i> <p>JavaScript</p></div>
      </div>
      <div className="col-md-10">
      <Slider {...settings}>
      <div>
        <img src={q1} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={q2} className='w-100 rounded-3'/>
      </div>
     
    </Slider>
    <a href='https://khaledsherif97.github.io/ass2/' target='_blank' className='btn btn-primary text-center w-100 mt-5'>Site Link </a>
      </div>
     
    </div>
      </div>
      {/*Book*/}
      <div>
      <div className="row my-2">
      <div className="col-md-10">
      <Slider {...settings}>
      <div>
        <img src={b1} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={b2} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={b3} className='w-100 rounded-3'/>
      </div>
      
      
     
    </Slider>
    <a href='https://khaledsherif97.github.io/jsass3/' target='_blank' className='btn btn-primary text-center w-100 mt-5'>Site Link </a>
      </div>
      <div className="col-md-2">
        <div className=' bg-body-secondary text-warning text-center rounded-3 py-2 mb-2'> <i class="fa-brands fa-html5 fs-2"></i> <p>HTML5</p></div>
        <div className=' bg-body-secondary text-info text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-css3 fs-2"></i><p>CSS3</p></div>
        <div className=' bg-body-secondary text-primary text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-bootstrap fs-2"></i> <p>Bootstrab</p></div>
        <div className=' bg-body-secondary text-warning text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-js fs-2"></i> <p>JavaScript</p></div>
      </div>
    </div>
      </div>
      {/*mealify*/}
      <div>
      <div className="row my-2">
      <div className="col-md-2">
        <div className=' bg-body-secondary text-warning text-center rounded-3 py-2 mb-2'> <i class="fa-brands fa-html5 display-5"></i> <p>HTML5</p></div>
        <div className=' bg-body-secondary text-info text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-css3 display-5"></i><p>CSS3</p></div>
        <div className=' bg-body-secondary text-primary text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-bootstrap display-5"></i> <p>Bootstrab</p></div>
      </div>
      <div className="col-md-10">
      <Slider {...settings}>
      <div>
        <img src={meal1} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={meal2} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={meal3} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={meal4} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={meal5} className='w-100 rounded-3'/>
      </div>
    
      
     
    </Slider>
    <a href='' className='btn btn-primary text-center w-100 mt-5'>Site Link </a>
      </div>
    </div>
      </div>
      
     
      {/*Daniel*/}
      <div>
      <div className="row my-2">
      <div className="col-md-10">
      <Slider {...settings}>
      <div>
        <img src={d1} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={d2} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={d3} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={d4} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={d5} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={d6} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={d7} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={d8} className='w-100 rounded-3'/>
      </div>
      
     
    </Slider>
    <a href='' className='btn btn-primary text-center w-100 mt-5'>Site Link </a>
      </div>
      <div className="col-md-2">
        <div className=' bg-body-secondary text-warning text-center rounded-3 py-2 mb-2'> <i class="fa-brands fa-html5 display-5"></i> <p>HTML5</p></div>
        <div className=' bg-body-secondary text-info text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-css3 display-5"></i><p>CSS3</p></div>
        <div className=' bg-body-secondary text-primary text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-bootstrap display-5"></i> <p>Bootstrab</p></div>
      </div>
    </div>
      </div>
      {/*dev*/}
      <div>
      <div className="row my-2">
      <div className="col-md-2">
        <div className=' bg-body-secondary text-warning text-center rounded-3 py-2 mb-2'> <i class="fa-brands fa-html5 display-5"></i> <p>HTML5</p></div>
        <div className=' bg-body-secondary text-info text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-css3 display-5"></i><p>CSS3</p></div>
        <div className=' bg-body-secondary text-primary text-center rounded-3 py-2 my-2'> <i class="fa-brands fa-bootstrap display-5"></i> <p>Bootstrab</p></div>
      </div>
      <div className="col-md-10">
      <Slider {...settings}>
      <div>
        <img src={dd1} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={dd2} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={dd3} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={dd4} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={dd5} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={dd6} className='w-100 rounded-3'/>
      </div>
      <div>
        <img src={dd7} className='w-100 rounded-3'/>
      </div>
    
      
     
    </Slider>
    <a href='' className='btn btn-primary text-center w-100 mt-5'>Site Link </a>
      </div>
    </div>
      </div>
 
     
    </Slider>
    <div className=' text-center mt-3 fs-3' >
    <i className="fa-solid fa-arrows-left-right text-primary"></i>
      <p><i className="fa-solid fa-hand-point-up text-primary "></i></p>
    </div>
    {/*<p className=' text-center mt-4 '><span><i class="fa-solid fa-reply me-5 pe-5"></i></span> <span className=' text-white'>________________________________</span> <span><i class="fa-solid fa-share ms-5 ps-5"></i></span></p>*/}
   
   
   
  </Fade>
    
  </div></div>
  )
}

export default Projects