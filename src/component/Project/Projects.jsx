import React from 'react'

const Projects = () => {
    return (
        <>
            <section className="our_creation">
                <div className="container">
                    <div className="row d-flex align-items-center mb-4">
                        <div className="col-md-9">
                            <div className="theme_title">
                                <h4 className="sub_title">You can see my Creative Creations</h4>

                            </div>
                        </div>

                    </div>


                    <div className="row taxi_booking d-flex align-items-center common_row">
                        <div className="col-md-6">
                            <div className="left eyes">
                            <a href="https://lucent-marzipan-4cd02a.netlify.app" target="_blank" rel="noreferrer" > <button className="design_btn">Design &amp; Development</button><i className="fa-solid fa-eye fa-beat-fade"></i></a>
                                <h2>React | HTML | Css | Javascript</h2>
                                <h3>Weather app</h3>

                            </div>
                        </div>
                        <div className="col-md-6 right">
                            <div className="text-center">
                                <img src="imgs/Projects/img1.png" className="img-fluid" alt="Case Study" loading="lazy" />
                            </div>
                        </div>
                    </div>


                    <div className="row taxi_booking mt-4 mt-sm-5 d-flex align-items-center position-relative common_row">

                        <div className="col-md-6 left">
                            <div className="eyes">
                            <a href="https://clinzzodemosite.netlify.app" target="_blank" rel="noreferrer" > <button className="design_btn app">Design &amp; Development </button><i className="fa-solid fa-eye fa-beat-fade"></i></a>
                                <h2>React | HTML | Css | Javascript</h2>
                                <h3>Car wash Demo site</h3>

                            </div>
                        </div>
                        <div className="col-md-6 right">
                            <div className="text-center">
                                <img src="imgs/Projects/img2.png" className="img-fluid" alt="Case Study" loading="lazy" />
                            </div>
                        </div>

                    </div>
                    <div className="row taxi_booking clinzzoweb  mt-4 mt-sm-5 d-flex align-items-center common_row">
                        <div className="col-md-6">
                            <div className="left eyes">
                            <a href="https://clinzzo.netlify.app" target="_blank" rel="noreferrer"> <button className="design_btn">Design &amp; Development</button><i className="fa-solid fa-eye fa-beat-fade"></i></a>
                                <h2>React | HTML | Css | Javascript</h2>
                                <h3>Clinzzo web live app</h3>

                            </div>
                        </div>
                        <div className="col-md-6 right">
                            <div className="text-center">
                                <img src="imgs/Projects/website.png" className="img-fluid" alt="Case Study" loading="lazy" />
                            </div>
                        </div>
                    </div>


                    <div className="row cancer_care mt-4 mt-sm-5 d-flex align-items-center position-relative common_row">

                        <div className="col-md-6 left">
                            <div className="eyes">
                                <button className="design_btn app">Design &amp; Content </button> <i className="fa-solid fa-eye fa-beat-fade"></i>
                                <h2>Canva |</h2>
                                <h3>Some Creative Post Desing </h3>

                            </div>
                        </div>
                        <div className="col-md-6 right">
                            <div className="text-center">
                                <img src="imgs/Projects/img3.png" className="img-fluid" alt="Case Study" loading="lazy" />
                            </div>
                        </div>

                    </div>
                    


                </div>


            </section>

        </>
    )
}

export default Projects
