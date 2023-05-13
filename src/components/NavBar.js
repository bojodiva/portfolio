import React from "react";
import { NavLink } from "react-router-dom";
import picture from "../images/Logo.png";
// import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function NavBar() {
 
 const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#004c9a" : "grey",
      fontWeight: isActive ? "bold" : "normal",
    };
  };

    const [smallScreen, setSmallScreen] = useState(false);

    useEffect(() => {
       const handleSize = () => {
        setSmallScreen(window.innerWidth < 768);
       };

       window.addEventListener('resize', handleSize);

       return () => {
        window.removeEventListener('resize', handleSize);
       }
    }, [])


  return (
    <>
    {smallScreen ? ( 
       <div className="nav--bar">
       <div className="name--logo">
         <img src={picture} className="nav--logo" alt="logo"></img>
       </div>

    <div className="contact--link">
        <NavLink to="contact" style={navLinkStyle} className="nav--link">
          Contact
        </NavLink>
      </div>
     
      </div>


     ) : (
      <div className="nav--bar">
        <div className="name--logo">
          <img src={picture} className="nav--logo" alt="logo"></img>
        </div>


       
         <div className="links--container" id="nav--links">
           <div className="links">
             <NavLink to="/" style={navLinkStyle} className="nav--link">
               Home
             </NavLink>
             <NavLink to="about" style={navLinkStyle} className="nav--link">
               About
             </NavLink>
             <NavLink to="resume" style={navLinkStyle} className="nav--link">
               Portfolio
             </NavLink>
           </div>
           </div>
           <div className="contact--link">
             <NavLink to="contact" style={navLinkStyle} className="nav--link">
              Contact
             </NavLink>
           </div>
           {/* <button className="nav-btn nav-close-btn" onClick={showNavBar}>
             <FaTimes />
           </button>
         

         <button className="nav-btn" onClick={showNavBar}>
           <FaBars />
         </button> */}
      </div>
        )}
    </>
  );
}
