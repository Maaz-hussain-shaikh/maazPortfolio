import React from 'react'
import Projects from '../Project/Projects';
import Skillsshowcase from '../Project/Skillsshowcase';
import Technology from '../About/Technology';
import Certification from '../Project/Certification';
import Contactform from '../Contact/Contactform';


import About from '../About/About';
import Header from './Header';
import Keys from './Keys';
const Firstpage = () => {
  return (
    <>
       <Header />
       <About head='' img="imgs\intromob.jpg" intro="A passionate front-end developer who transforms creative ideas into captivating digital realities. My mission is to merge artistry with technology, leaving a lasting impression through innovative web design and user-centric experiences.I'm excited about the opportunity to collaborate and weave digital wonders together. If you're seeking a front-end developer with a flair for enchanting web experiences, let's embark on this magical journey."/>
        <Keys />
        <Projects />
        <Skillsshowcase />
        <Certification/>        
        <Contactform />
       
        <Technology />
        
    </>
  )
}

export default Firstpage
