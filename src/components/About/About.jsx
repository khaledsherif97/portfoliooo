import React from 'react'

const About = () => {
  return (
    <div className=' col-md-8'>
    <div className=' bg-white rounded-3 px-5 py-4'>
      <h3>Summary about me :</h3>
      <p>Innovative and detail-oriented Fresher Front End Developer with a passion for creating responsive and 
        user-friendly websites. Skilled in collaborating with back-end developers, utilizing version control 
       systems, and staying up-to-date on emerging technologies. Proven track record in improving website 
        traffic, performance, and functionality through the implementation of front-end coding standards and 
       troubleshooting.
      </p>
      <h3>Education :</h3>
      <p> Bachelor’s Degree in Science 
      Alexandria University, Sep 2020 </p>
      <h3>Skills :</h3>
      <div className="row bg-body-secondary rounded-3 py-2">
      <div className="col-md-6">
        <h6>Technical skills :</h6>
        <p><i class="fa-brands fa-html5"></i> HTML5</p>
        <p><i class="fa-brands fa-css3"></i> CSS3</p>
        <p> <i class="fa-brands fa-bootstrap"></i> Bootstrap</p>
        <p><i class="fa-solid fa-code"></i> Responsive Web Design</p>
        <p><i class="fa-brands fa-js"></i> Java Script</p>
        <p><i class="fa-brands fa-react"></i> React framework</p>
        <p><i class="fa-brands fa-github"></i> Experience with GitHub</p>
      </div>
      <div className="col-md-6">
      <h6>Personal skills :</h6>
      <p>-Excellent communication Skills</p>
      <p>-customer relationship Skills</p>
      <p>-Strong teamwork and networking skills</p>
      <p>-Confidence, ambition, determination and persistence</p>
      <p>-Ability to accept criticism and move on</p>
      </div>
    </div>
    </div>
   
  </div>
  )
}

export default About