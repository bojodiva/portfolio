import React from "react"
import { NavLink } from "react-router-dom";
import picture from "../images/Logo.png";
import picture1 from "../images/github-logo.svg";
import picture2 from "../images/linkedin-logo.svg";
import picture3 from "../images/twitter-logo.svg";
import picture4 from "../images/medium-logo.png";

export default function Footer(){
    return(
        <>
          <div className="footer--container">
    <div className="logo--container">
      <img src={picture} className="nav--logo" alt="logo"></img>
    </div>
    <div>
        <h3 className="footer--heading">Quick Links</h3>
        <div className="link--container">
            <NavLink to="/" className="footer--link">Home</NavLink>
            <NavLink to="/about" className="footer--link">About</NavLink>
            <NavLink to="/contact" className="footer--link">Contact</NavLink>
            <NavLink to="/resume" className="footer--link">Portfolio</NavLink>
</div>
    </div>

    <div>
        <h3 className="footer--heading">Follow my socials</h3>
        <div className="link--container" >
       <a href="https://twitter.com/b_ojo_" rel="noreferrer" target="_blank" className="socials--link"><img src={picture3} className="socials--logo" alt="footer" ></img> Twitter</a>
       <a href="https://github.com/bojodiva" rel="noreferrer" target="_blank" className="socials--link"><img src={picture1} className="socials--logo-github" alt="footer" ></img> GitHub</a>
       <a href="https://www.linkedin.com/in/abisola-ojo-/" rel="noreferrer" target="_blank" className="socials--link"><img src={picture2} className="socials--logo" alt="footer" ></img> LinkedIn</a>
       <a href="https://instagram.com/bojodiva?igshid=ZDdkNTZiNTM=" rel="noreferrer" target="_blank" className="socials--link"><img src={picture4}  alt="footer" className="socials--logo"></img> Instagram</a>
        </div>
    </div>

    
       <div className="footer--last"><h1 className="footer--small"> &#169;2023, built and designed with &#x2764; by Bojo</h1></div>
    

   </div>
        </>
    )
}