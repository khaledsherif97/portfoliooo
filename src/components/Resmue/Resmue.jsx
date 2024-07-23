import { Fade, Text } from 'animation-react'
import React from 'react'

const Resmue = () => {
  return (
    <div className=' col-md-8 z-1'>
    <div className=' bg-white bg-opacity-75 border border-3 border-primary  rounded-3 px-5 py-4'>
 
      <h3 className=' text-center text-primary fw-semibold fs-2'><Text 
        value="Resume "
        type="drop"
        delay={0.5}
        duration={0.5}
        isRepeat={false}
        option={""}
      /></h3>
      <Fade 
        type="bottom"
        translate="200px"
        delay={0.5}
        duration={0.5}
        isRepeat={false}
> 
      <h4>Relevant Coursework:</h4>
      <h6 className=' fs-6'>- Front-end development from Route Academy (Oct 2023 -Feb 2024)</h6>
      <h6>• Course content</h6>
      <p>(HTML5, CSS3, Bootstrap, JavaScript and React)</p>
      <h6 className=' fs-6 mt-2'>- Back-end development “Node.JS” from Route Academy (In progress)</h6>
      <h3>Skills :</h3>
      <div className="bg-body-secondary rounded-3 p-2">
        <div className="row">
      <div className="col-md-6">
        <h6>Technical skills :</h6>
        <p>• HTML5 & CSS3</p>
        <p>• Bootstrap & tailwind</p>
        <p>• Ant Desgin & MUI</p>
        <p>• Responsive Web Design</p>
        <p>• Java Script & Type Script</p>
        <p>• React framework (CRA and Vite)</p>
        <p>• Experience with GitHub</p>
      </div>
      <div className="col-md-6">
      <h6>Personal skills :</h6>
      <p>• Excellent communication Skills</p>
      <p>• customer relationship Skills</p>
      <p>• Strong teamwork and networking skills</p>
      <p>• Confidence, ambition, determination and persistence</p>
      <p>• Ability to accept criticism and move on</p>
      </div>
      </div>
      </div>
     </Fade>
    </div>
  </div>
  )
}

export default Resmue