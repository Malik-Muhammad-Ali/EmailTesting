import emailjs from 'emailjs-com';
import { useState } from 'react';

const Emailer = ()=>{

  const [submitted, setSubmitted] = useState(false);

  if(submitted){
    return(
      <>
        <div className='custom'>
          <div className='form-div'>
            <h4>Your Response has been successfully Submited.</h4>
            <h4>Check Your Email.</h4>
            <button 
              onClick={()=>{
                setSubmitted(false);
              }} 
              className="button mt-3" 
            >
              <a className="btn">
                <span>Submit Another Response</span>
                <span>Submit Another Response</span>
              </a>
            </button>
          </div>
        </div>
      </>
    )
  }

  const sendEmail1 = (e)=>{
    emailjs.sendForm('service_u8pjdyk', 'template_iw4u2bd', e.target, 'C3x5QG4DnFafovk4n')
      .then((res)=>{
    }).catch((err)=>{
    });
  }
  
  return(
    <>
      <div className='custom'>
        <form className='form-div' 
          onSubmit={(e)=>{
            e.preventDefault();
            sendEmail1(e);
            setSubmitted(true);
        }}>
          <h1>Contact Form</h1>
          {/* Name */}
          <div className="form-floating mt-5">
            <input 
              name="user_name"
              type="text" 
              className="form-control" 
              id="floatingInput" 
              placeholder="Name" 
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          {/* Email */}
          <div className="form-floating mt-3">
            <input 
              name="user_email"
              type="email" 
              className="form-control" 
              id="floatingInput" 
              placeholder="Email Address" 
            />
            <label htmlFor="floatingInput">Email Address</label>
          </div>
          {/* Textarea */}
          <div className="form-floating mt-3">
            <textarea 
              name="user_message"
              className="form-control" 
              placeholder="Message" 
              id="floatingTextarea2" 
              style={{height: "100px"}} 
            ></textarea>
            <label htmlFor="floatingTextarea2">Message</label>
          </div>
          <button type="submit" className="button mt-3">
            <a className="btn">
              <span>Submit</span>
              <span>Submit</span>
            </a>
          </button>
        </form>
      </div>
    </>
  )
}

export default Emailer;