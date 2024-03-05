import React from 'react'

const About = (props) => {
  return (
    <>
                  <div className="about_tech_section">
                <div className="container">
                    <div className="row">
                        <h2 className="title">{props.head}</h2>
                        
                    </div>
                    <div className="row my-2 d-flex align-items-center">
                        <div className="col-lg-6 col-xl-5">
                            <div className="left">
                                <img src={props.img} className="img-fluid" alt="abouts" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7">
                            <div className="right mt-5 mt-lg-0">
                                <p> I am reaching out to express my strong desire to secure a position in the frontend field.
                                </p>

                                <p>{props.intro}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default About
