import React, { useState } from 'react'
import axios from 'axios';

const Contactform = () => {
   
    const [data, updata] = useState({
        gmail: "",
        companyName: "",
        Phone: "",
        name:"",
        msg:"",
    })
    const [formstatus, update] = useState("Contact");
    const handelchange = (e) => {
        let val = e.target.value
        let num = e.target.name
        updata({ ...data, [num]: val });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('gmail', data.gmail);
        formData.append('companyName', data.companyName);
        formData.append('Phone', data.Phone);
        formData.append('name', data.name);
        formData.append('msg', data.msg);
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
                update("Thank you!");            
                updata({});
            }else{
                alert("somthing is worng try after sometime")
            }
        })
    };

    return (
        <>
            <section className="service">
                <div className="containero">
                    <div className="text">
                        Contact us Form
                    </div>
                    <form action='https://formspree.io/f/xvojoray' method="POST" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="input-data">
                                <input type="text" onChange={handelchange} name='name' value={data.name} autocomplete="off" required />
                                <div className="underline"></div>
                                <label for="">Full Name</label>
                            </div>
                            <div className="input-data">
                                <input name="Phone" type="tel"   value={data.Phone}
                                    onChange={handelchange}
                                    required />
                                <div className="underline"></div>
                                <label for="">Phone</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data">
                                <input name="gmail" type="email" value={data.gmail}
                                    onChange={handelchange}    required />
                                <div className="underline"></div>
                                <label for="">Email Address</label>
                            </div>
                            <div className="input-data">
                                <input name="companyName" type="text"   value={data.companyName}
                                    onChange={handelchange} autocomplete="off" required />
                                <div className="underline"></div>
                                <label for="">Company Name</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data textarea">
                                <textarea rows="8" cols="80" onChange={handelchange} name='msg' value={data.msg} required></textarea>
                                <br />
                                <div className="underline"></div>
                                <label for="">Write your message</label>
                                <br />
                                <div className="form-row submit-btn">
                                    <div className="input-data">
                                        <div className="inner"></div>
                                        <input type='submit'  value={formstatus} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </section>

        </>
    )
}

export default Contactform
