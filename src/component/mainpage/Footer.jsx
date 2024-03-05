import {React,useState} from 'react'
import axios from 'axios'
import Socialtap from '../Contact/Socialtap'

const Footer = () => {
    const [data, updata] = useState({
        suggestions : "",
    })
    const [formstatus, update] = useState("Submit");
    const handelchange = (e) => {
        let val = e.target.value
        let num = e.target.name
        updata({ ...data, [num]: val });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('suggestions ', data.suggestions);
        axios({
            url: 'https://formspree.io/f/xvojoray',
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            data: formData,
        }).then((response) => {
            if(response.status===200){
                console.log(response.status);
                update("Thank For your suggestion!");            
                updata({suggestions : ""});
            }else{
                alert("somthing is worng")
            }
            
        })
    };
    return (
        <>
     <footer>
            <p>"Each day, I am committed to becoming a better version of myself."</p>
                <div className="footer-content">
                    <div className="thank-you">

                        <h2>Thank you for visiting my website!</h2>
                        <p> Thank you for taking the time to go through my portfolio. I hope to speak with you soon and work together on some amazing projects.</p>
                    </div>
                    <div className="suggestion-box">
                        <h3>Have suggestions for improvement?</h3>
                        <form action='https://formspree.io/f/xvojoray' method="POST" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your suggestions..." name='suggestions' onChange={handelchange} value={data.suggestions} autocomplete="off"/>
                        <button type='submit' >{formstatus}</button>
                        </form>
                        
                    </div>
                    <div className="social-icons">
                        <Socialtap/>
                    </div>
                </div>


            </footer>
        </>
    )
}

export default Footer
