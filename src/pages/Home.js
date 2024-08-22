import React from "react";
import picture  from "../images/Abisola's portrait picture.jpg";
import Typewriter from "react-typewriter";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"



export default function Home(){

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


     const handleButtonClicked = () => {
        window.open(`${process.env.PUBLIC_URL}/abisola-CV.pdf`, '_blank')
     }
 
    return(
        <main>
{isSmallScreen ? (
    <div className="home--intro">
    <div>
    <h1 className="home--text-big">Hey there! </h1>
    <h2 className="name--text">I'm <span className="na--me">Abisola Ojo</span></h2>
     <h1 className="type--text">
        <Typewriter typing={1}>I am a Frontend Developer. </Typewriter>
     </h1>
    <p className="home--text-small"> I currently work with javascript library(React) and framework(Vue). <br/>I offer services such as building responsive UI and interactive websites, working with REST APIs <br/>and working in teams with developers.</p>
     <p className="home--text-small">I am also a <a rel="noreferrer" href="https://medium.com/@ojoabisola387" className="technical--link">technical writer.</a></p>

    <div>
        <img src={picture} className="home--picture" alt="abisola"></img>
    </div>

    <div className="cv--div">
       <button className="cv--button" onClick={handleButtonClicked}>View CV</button>
       <NavLink to="about" className="nav--link-home">About</NavLink>
       <NavLink to="resume" className="nav--link-home">Portfolio</NavLink>
    </div>
    </div>
</div>

  

) : (
            <div className="home--intro">
                <div>
                <h1 className="home--text-big">Hey there! </h1>
                <h2 className="name--text">I'm <span className="na--me">Abisola Ojo</span></h2>
                 <h1 className="type--text">
                    <Typewriter typing={1}>I am a Frontend Developer. </Typewriter>
                 </h1>
                <p className="home--text-small"> I currently work with javascript library(React) and framework(Vue). <br/>I offer services such as building responsive UI and interactive websites, working with REST APIs <br/>and working in teams with developers.</p>
                 <p className="home--text-small">I am also a <a rel="noreferrer" href="https://medium.com/@ojoabisola387" className="technical--link">technical writer.</a></p>

                <div className="cv--div">
                   <button className="cv--button" onClick={handleButtonClicked}>View CV</button>
                    
                </div>

              
                </div>
                <div>
                    <img src={picture} className="home--picture" alt="abisola"></img>
                </div>
            </div>
       


)}
    
        </main>
    )
}