import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Resume from "../pages/Resume";



export default function GeneralPage(){
    return(
        <>
       

        <nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="*" element={<h1 className="error--note">Not Found</h1>}/>
          </Routes>
        </nav>

      

       

        </>
    )
}