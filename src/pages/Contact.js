import React from "react";
import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { NavLink } from "react-router-dom";

export default function Contact(){

    const[isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleSize = () => {
         setIsSmallScreen(window.innerWidth < 768);
        };
 
        window.addEventListener('resize', handleSize);
 
        return () => {
         window.removeEventListener('resize', handleSize);
        }
     }, [])
 

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
   
        emailjs.sendForm('service_l6ji0tl', 'template_h4lm9ol', e.target, 'y_FtYJqliWlG3vt4H')
          .then((result) => {
              console.log(result.text);
              alert("SUBMITTED SUCCESSFULLY!");
          }, (error) => {
              console.log(error.text);
              alert("FAILED...", error);
          });
          e.target.reset()
      };

    return(
        <>
       {isSmallScreen ? (
     <div>
        <h2 className="heading2">Contact Me</h2>
 <div className="head--intro">
 <p className="head--note">I would love to here from you and possibly collaborate on projects. Let's get in touch.</p>
 <a href="mailto:ojoabisola387@gmail.com"><button className="email--button">My Email</button></a>
 </div>
        <form className="form" id="contactpage" ref={form}  onSubmit={sendEmail}>
            
            <div className="form_group">
                <label for="first_name" className="form_group-label">* First Name</label>
                <input type="text" name="First_name" id="first_name" className="first_name" placeholder="Enter your firstname" required></input>
                <small></small>
            </div>
            <div className="form_group">
                <label for="last_name" className="form_group-label">* Last Name</label>
                <input type="text" name="Last_name" id="last_name" className="last_name" placeholder="Enter your lastname" required></input>
                <small></small>
            </div>
            
            <div className="form_group">
                <label for="message" className="form_group-label">* Message</label>
                <input type="text" name="Message" id="message" className="message" placeholder=" Enter your message" required></input>
                <small></small>
            </div>
            
         
     <div className="form_group">
           <button id="btn" className="btn-submit" type="submit" >Submit</button>
            </div>
             <div className="form_group">
                <NavLink to="/" className="btn-submit"> Go Back Home</NavLink>
             </div>
             </form>

 </div>
     
       ) : (
 
 <div>
 <h2 className="heading2">Contact Me</h2>
 <div className="head--intro">
 <p className="head--note">I would love to here from you and possibly collaborate on projects. Let's get in touch.</p>
 <a href="mailto:ojoabisola387@gmail.com"><button className="email--button">My Email</button></a>
 </div>
        <form className="form" id="contactpage" ref={form}  onSubmit={sendEmail}>
            
            <div className="form_group">
                <label for="first_name" className="form_group-label">* First Name</label>
                <input type="text" name="First_name" id="first_name" className="first_name" placeholder="Enter your firstname" required></input>
                <small></small>
            </div>
            <div className="form_group">
                <label for="last_name" className="form_group-label">* Last Name</label>
                <input type="text" name="Last_name" id="last_name" className="last_name" placeholder="Enter your lastname" required></input>
                <small></small>
            </div>
            
            <div className="form_group">
                <label for="message" className="form_group-label">* Message</label>
                <input type="text" name="Message" id="message" className="message" placeholder=" Enter your message" required></input>
                <small></small>
            </div>
            
         
     <div className="form_group">
           <button id="btn" className="btn-submit" type="submit" >Submit</button>
            </div>


          </form>
 </div>

       )}

        </>
    )
}