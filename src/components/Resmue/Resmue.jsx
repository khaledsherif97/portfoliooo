import { Fade, Text } from 'animation-react'
import React from 'react'

const Resmue = () => {
  return (
    <div className=' col-md-8 z-1'>
    <div className=' bg-white bg-opacity-75 border border-3 border-primary  rounded-3 px-5 py-4'>
 
      <h3><Text 
        value="Resume :"
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
      <h6 className=' fs-6'>#Front-end development from Route Academy (Oct 2023 -Feb 2024)</h6>
      <div className="row bg-body-secondary rounded-3 p-2">
        <h6 className='text-center'> Course content :</h6>
        <div className="col-md-4">
          <p>-HTML and HTML5</p>
          <p>-CSS and CSS3</p>
          <p>-Bootstrap5</p>
          <p>-Fontawesome6</p>
          <p>-JavaScript </p>
          <p>-DOM </p>
          <p>-jQuery </p>
          <p>-SPA architecture</p>
         
        </div>
        <div className="col-md-4">
        <p>-OOP</p>
          <p>-JSX</p>
          <p>-TypeScript with React</p>
          <p>-Class components</p>
          <p>-Functional components</p>
          <p>-React hooks and react custom hooks</p>
          <p>-React-router-dom</p>
          <p>-AXIOS</p>
        </div>
        <div className="col-md-4">
        <p>-Formik</p>
        <p>-Context</p>
        <p>-Redux</p>
        <p>-generate-react-cli</p>
        <p>-Toast</p>
        <p>-React-helmet</p>
        <p>-React-Queary</p>
        <p>-Introduction in Next</p>
        </div>
      </div>
      <h6 className=' fs-6 mt-2'>#Back-end development “Node.JS” from Route Academy (In progress)</h6>
     </Fade>
    </div>
  </div>
  )
}

export default Resmue