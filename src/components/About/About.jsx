import { Fade, Text } from 'animation-react'
import React from 'react'

const About = () => {
  return (
    <div className=' col-md-8 z-1'>
    <div className=' bg-white bg-opacity-75 border border-3 border-primary   rounded-3 px-5 py-4'>
    <Fade 
        type="top"
        translate="200px"
        delay={0.5}
        duration={0.5}
        isRepeat={false}
> 
      <h3 className=' text-center text-primary fw-semibold fs-2'><Text 
        value="Summary about me "
        type="drop"
        delay={0.5}
        duration={0.5}
        isRepeat={false}
        option={""}
      /></h3>
      <p>Innovative and detail-oriented Fresher Front End Developer with a passion for creating responsive and 
        user-friendly websites. Skilled in collaborating with back-end developers, utilizing version control 
       systems, and staying up-to-date on emerging technologies. Proven track record in improving website 
        traffic, performance, and functionality through the implementation of front-end coding standards and 
       troubleshooting.
      </p>
</Fade>
      <Fade
        type="bottom"
        translate="200px"
        delay={0.5}
        duration={0.5}
        isRepeat={false}
      > 
      <h3>Education :</h3>
      <p> Bachelor’s Degree in Science 
      Alexandria University, Sep 2020 </p>
      <h3>Work Experience : </h3>
      <h5 className=' fs-5'>- Front-end developer (React.JS)</h5>
      <p>• H-TECH Modern Programming. (May 2024- Till Now) </p>
      <h5 className=' fs-5'>- Medical Representative</h5>
      <p>• MD dental. (Aug 2022 _ Aug 2023) </p>
      <p>• Hexa pharma international. (April 2021 _ May 2022) </p>
      <h5 className=' fs-5'>- Event Coordinator</h5>
      <p>• Freelancing Job. (June 2017 – March 2021) </p>
     
    </Fade>
    </div>
   
  </div>
  )
}

export default About