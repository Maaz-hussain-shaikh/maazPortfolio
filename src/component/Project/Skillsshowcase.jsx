import React from 'react'
const Show = (props) => {
    return (<>

        <div className="col-sm-6 col-lg-3">
            <div className="edge_inner">
                <div className="d-flex align-items-center skills">
                    <i className={props.icon}></i>
                    <h2 className="px-3">{props.skillname}</h2>
                </div>
                <p>
                    {props.brif}</p>
            </div>
        </div>
    </>)
}

const Skillsshowcase = () => {
    return (
        <>
            <div className="our_edge_section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 top_heading">
                            <h2 className="title text-center text-white">Specialities</h2>
                            <p className="text-center">My creative specialties include:</p>
                        </div>
                    </div>
                    <div className="row mt-4 d-flex justify-content-center">


                        <Show skillname="React.js" brif="I have 6+ months of experience in React.js, proficient in building interactive web applications using the framework." icon="fa-brands fa-react" />

                        
                        <Show skillname="Javascript" brif="I have a strong proficiency in JavaScript and love working with its many frameworks, including React." icon="fa-brands fa-square-js" />


                        <Show skillname="Node.js" brif="Experienced with Node.js for server-side development. Familiar with building basic applications and working with frameworks and libraries. " icon="fa-brands fa-node"/>
                        <Show skillname="MongoDb" brif="Familiar with MongoDB for basic database operations .Actively learning and expanding knowledge in MongoDB to enhance proficiency." icon="fa-solid fa-database"/>
                        <Show skillname="Express" brif="Comfortable with Express.js for building web applications and RESTful APIs. integrating middleware for enhanced functionality." icon="fa-brands fa-jsfiddle"/>
                        <Show skillname="Git & github" brif="Skilled in Git and GitHub for effective version control and collaborative development. Proficient in repository management." icon="fa-solid fa-code-merge"/>


                        <Show skillname="HTML" brif="Experienced in HTML, skilled at crafting visually appealing web pages with a strong emphasis on structure and usability." icon="fa-solid fa-code"/>

                       
                        <Show skillname="Css" brif="My knowledge of CSS allows me to create engaging and responsive user interfaces. I'm particularly fond of Sass!" icon="fa-brands fa-css3-alt"/>
                        
                        <Show skillname="Tailwind CSS" brif="Skilled in Tailwind CSS for rapid front-end development. Proficient in utilizing utility classes to create responsive and visually appealing designs." icon="fa-solid fa-file-code"/>

                        <Show skillname="Canva" brif="With my graphic design experience in canva, I am able to create stunning UI designs." icon="fa-solid fa-c"/>

                        <Show skillname="Python" brif="I'm also proficient in Python & C, which enables me to build more sophisticated back-end systems." icon="fa-brands fa-python"/>

                       

                       

                     

                        
                       
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skillsshowcase
