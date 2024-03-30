import React from 'react'
import Abouthead from './Abouthead'
import About from './About'
import Schooling from './Schooling'
import Experience from '../Project/Experience'
import Technology from './Technology'
import Skillsshowcase from '../Project/Skillsshowcase'

const Aboutpage = () => {
  return (
    <>
      <Abouthead/>
      <About head='Know more about me ' img="/imgs/Aboutimg.png"   intro=' Originally from Ratlam, I relocated to Dewas to pursue my studies, and I am currently residing here. I recently completed my graduation in Computer Science from Mahakal Institute of Technology, Ujjain. Throughout my academic journey, I have gained a solid foundation in programming concepts and web development.As a dedicated learner, I am passionate about keeping up with the latest industry trends and technologies. I am confident that my strong analytical and problem-solving skills, coupled with my attention to detail, would make me a valuable asset to any frontend development team. I am eager to contribute my knowledge and actively participate in creating exceptional user experiences.I am seeking a challenging position where I can continue to expand my skill set and contribute to the success of a forward-thinking organization. I am open to both entry-level and intermediate roles, as I firmly believe in the value of continuous learning and professional growth.'/>
      <Schooling/>
      <Experience/>
      <Technology/>
      <Skillsshowcase/>
    </>
  )
}

export default Aboutpage
