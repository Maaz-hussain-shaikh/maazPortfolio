import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
const navigate=useNavigate()
    return (
        <>

            <div className='nav'>
                <nav className="navbar navbar-expand-lg ">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" onClick={()=>{navigate("/")}}>Home</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" onClick={()=>{navigate("About")}}>About</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false" onClick={()=>{navigate("Project")}}>Projects</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false" onClick={()=>{navigate("HireMe")}}>Hire me</button>
                        </li>
                    </ul>


                    
                </nav>


            </div>




        </>
    )
}

export default Nav;