import React from 'react'

const Schooling = () => {
  return (
    <>
    <div style={{textAlign:"center"}}>
    <h2 className="section-title">Education & Qualifications</h2>
    </div>
     
     <section className="qualification">
       
        <div className="qualification-container">
            <div className="qualification-item">
                <h3 className="qualification-title">🎓 Bachelor's Degree</h3>
                <p className="qualification-info">Computer Science</p>
                <p className="qualification-info">Mahakal institute of technology and managment </p>
                <p className="qualification-year">Graduated: 2022</p>
                <p className="qualification-percentage">GPA: 6.5</p>
            </div>
            <div className="qualification-item">
                <h3 className="qualification-title">🏫 12th Grade</h3>
                <p className="qualification-info">Chishtiya public H.S school</p>
                <p className="qualification-info">M.P Board</p>
                <p className="qualification-year">Completed: 2018</p>
                <p className="qualification-percentage">Course Score: 55%</p>
            </div>
            <div className="qualification-item">
                <h3 className="qualification-title">🏫 10th Grade</h3>
                <p className="qualification-info">Shree Gujrati samaj H.S school </p>
                <p className="qualification-info">M.P Board</p>
                <p className="qualification-year">Certified: 2016</p>
                <p className="qualification-percentage">Course Score: 64%</p>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default Schooling
