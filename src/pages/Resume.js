import React, {useEffect} from "react";
import picture1 from "../images/GitHubRepo.png";
import picture2 from "../images/Pagination.png";
import picture3 from "../images/ReactCalculatorApp.png";
import picture4 from "../images/Converter.png";
import picture5 from "../images/Calculator.png";
import AOS from "aos";
import "aos/dist/aos.css";
import picture6 from "../images/first-technical.png";
import picture7 from "../images/second-technical.png";


export default function Resume(){
    useEffect(() =>{
   AOS.init({duration: 2000});
}, [])
    return(
        <>
       

<div>
  <h1 className="intro--note">Here are the projects I have worked on so far. </h1>
 
      
<div data-aos="zoom-in">
<section className="project">
  <div className="footer--head-container">
  <div className="footer--heading">
  <h2 className="appp">Calculator App(React JavaScript)</h2>
  <p className="p-note">This is a simple calculator implemented with ReactJs. It performs simple arithmetic calculations.</p>
  </div>
  <div className="footer--demo">
    <h1> <a rel="noreferrer" href="https://gregarious-halva-1baef7.netlify.app/" target="_blank" className="linker">View Demo &#x2197;</a></h1>
  </div>
  </div>
  <a rel="noreferrer" href="https://gregarious-halva-1baef7.netlify.app/" target="_blank"><img src={picture3} className="photos" alt="calculator"></img></a>
</section>
</div>

 <div data-aos="zoom-in">
 <section className="project">
  <div className="footer--head-container">
    <div className="footer--heading">
            <h2 className="appp">Calculator App</h2>
              <p className="p-note">
                This is the first project i embarked on. It is a calculator app that performs simple arithmetic calculations. <br></br>I used Html,CSS and JavaScript in the implementation of this project.  </p>
                </div>
                <div className="footer--demo">
    <h1> <a rel="noreferrer" href="https://bojodiva.github.io/calculatorapp/"target="_blank" className="linker">View Demo &#x2197;</a></h1>
  </div>
                </div>
           <a rel="noreferrer" href="https://bojodiva.github.io/calculatorapp/" target="_blank"><img src={picture5} className="photos" alt="simple"></img></a>
            
        </section>
        </div>

<div data-aos="zoom-in">
<section className="project">
<div className="footer--head-container">
  <div className="footer--heading">
  <h2 className="appp">Pagination Project</h2>
  <p className="p-note">This project was made using ReactJs and a REST API. It displays information about random users gotten from an API. <br></br>It also implements Pagination for easier navigation. </p>
  </div>
  <div className="footer--demo">
    <h1> <a rel="noreferrer" href="https://timely-dodol-4d788e.netlify.app/" target="_blank" className="linker">View Demo &#x2197;</a></h1>
  </div>
  </div>
  <a rel="noreferrer" href="https://timely-dodol-4d788e.netlify.app/" target="_blank"><img src={picture2} className="photos" alt="pagination"></img></a>
</section>
</div>

<div data-aos="zoom-in">
  <section className="project">
  <div className="footer--head-container">
  <div className="footer--heading">
<h2 className="appp">GitHub Repo Pagination</h2>
    <p className="p-note">This project was made using ReactJs and GitHub REST API. It displays all my repositories from GitHub. <br></br>It also implements Pagination for easier navigation, 404 page and error handling.</p>
    </div>
  <div className="footer--demo">
    <h1> <a rel="noreferrer"href="https://endearing-cupcake-266e60.netlify.app/" target="_blank" className="linker"> View Demo &#x2197;</a></h1>
  </div>
  </div>
<a rel="noreferrer" href="https://endearing-cupcake-266e60.netlify.app/"  target="_blank"><img src={picture1} className="photos" alt="github"></img></a>
</section>
</div>

<div data-aos="zoom-in">
        <section className="project">
        <div className="footer--head-container">
  <div className="footer--heading">
  <h2 className="appp">Alphabet Converter</h2>
          <p className="p-note">This project was actually inspired by an algorithm i solved on codewars. <br></br>This project converts alphabets to their respective position. It was made using ReactJs.</p>
          </div>
  <div className="footer--demo">
    <h1> <a rel="noreferrer" href="https://illustrious-dieffenbachia-400fb7.netlify.app/" target="_blank" className="linker">View Demo &#x2197;</a></h1>
  </div>
  </div>
<a rel="noreferrer" href="https://illustrious-dieffenbachia-400fb7.netlify.app/" target="_blank"><img src={picture4} className="photos" alt="alphabet"></img></a>
</section>
</div>

<div>
  <h1 className="intro--note">Here are my technical write-ups</h1>
<div className="write--container">
<div className="project1" data-aos="fade-in">
  <a  rel="noreferrer" href="https://medium.com/@ojoabisola387/i-built-an-app-that-fetches-my-github-repositories-using-react-and-github-api-3dd2d109e1fd"  target="_blank">
    <img src={picture6} alt="first" className="photos1"></img></a>
</div>

<div className="project1" data-aos="fade-in">
  <a  rel="noreferrer" href="https://medium.com/@ojoabisola387/frameworks-and-libraries-b01bf01252ee"  target="_blank">
    <img src={picture7} alt="second" className="photos1"></img></a>
  </div>
  </div>
</div>
</div>
        </>
    )
}