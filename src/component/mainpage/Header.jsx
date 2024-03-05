import React from 'react'
import Socialtap from '../Contact/Socialtap'


const Header = () => {
   
    return (
        <>
            <section className='heading-1'>
            
                <div className="slider-thumb">
                    <img src="imgs\maaz_resume_img-removebg-preview.png" alt="profile" />


                </div>
                <div className='intro'>
                    
                    <h1 className='myname'>Maaz Hussain</h1>

                    <p>If you are looking for a passionate front-end developer who is dedicated to creating beautiful and functional websites, then look no further. Explore my portfolio and discover how I can bring your project to life.</p>
                    <div className="hero_btn d-flex justify-content-center">
                        <a href="tel:+91 8982001240" className="" aria-label="Explore Our work" rel="noopener">Let’s Work Together</a>
                        <a href="https://drive.google.com/file/d/1VecOSZIbYtALY_ZEF5ooA_zQXvNqDmIn/view?usp=sharing" className="resume_btn" aria-label="Explore Our work"  rel="noreferrer" target='_blank'>View Resume</a>
                    </div>
                    <Socialtap/>
                </div>
                
            </section>
            <section className='heading-2'>

                <div className="containerr  mt-4  ">
                    <div className="profile ">
                        <img src="imgs\mobilebg1.jpg" alt="Your Profile" />
                    </div>
                    <h1>Maaz Hussain</h1>
                    <p>If you are looking for a passionate front-end developer who is dedicated to creating beautiful and functional websites, then look no further. Explore my portfolio and discover how I can bring your project to life.</p>

                    <div className="hero_btn d-flex justify-content-center">
                        <a href="tel:8982001240" className="" aria-label="Explore Our work" rel="noopener">Let’s Work Together</a>
                        <a href="https://drive.google.com/file/d/1VecOSZIbYtALY_ZEF5ooA_zQXvNqDmIn/view?usp=sharing" className="resume_btn" aria-label="Explore Our work" rel="noopener" >View Resume</a>
                    </div>

                    <Socialtap/>

                    
                </div>
            </section>
            <div className='keysection' >
                <img src="imgs\skills.png" alt="kes" className='keyimg' />
            </div>
            <div className='keysection2' >
                <img src="imgs\kes.png" alt="kes" className='keyimg' />
            </div>
        </>
    )
}

export default Header
