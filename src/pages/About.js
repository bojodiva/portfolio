import React from "react";
import picture from "../images/full-picture.jpg"

export default function About(){
    return(
    
<>

<div className="about--container">
      <p className="paragraph">
        My name is Abisola and it is pronounced AH--BEE--S0H--LAH. I am also addressed as Ojo, Debbie, Bojo and Abby. I prefer to be addressed by any of them.
      </p>
     
      <p className="paragraph">
        I was born in the early 20's. I am very vibrant, friendly, determined
        and selfless. I am a passionate learner, listener and researcher. I am very
        passionate about the work I do with the aim of making people's life
        easier. I started my tech journey few months ago and it is one of the
        best decisions I have made.
      </p>
      <img
        src={picture}
        alt="Abisola"
        className="pic1"
      ></img>
      <p className="paragraph">
        I have been able to attain my Frontend development skill in a virtual school called
      <a  className="alt--link" rel="noreferrer" href="https://altschoolafrica.com/" target="_blank" >ALTSCHOOL AFRICA</a>
          
          where I am currently a student. The experience has been wonderful so
        far, very impactful and so much to learn.
      </p>
      <h2 className="about">Educational Background</h2>
      <p className="paragraph">
        <li>
          Started elementary school at Christ Dominion International School.
        </li>
        <li>
          Then proceeded to an high school called The African Church Model
          College where i completed my secondary education.
        </li>
        <li>
          Currently studying Computer Engineering at the University Of Lagos.
        </li>
      </p>
      <h2 className="about">Job Experience</h2>
      <p className="paragraph">
        I have worked on projects in HTML, CSS, JavaScript, React and Vue. I'm learning to
        become the best.
      </p>
      <h2 className="about">More On Family</h2>
      <p className="paragraph">
        I am the last child of my parents. I have three amazing elder siblings
        who support me tremendously. I hail from Osun State, Nigeria. I live in
        Ogun State and currently schooling in Lagos State. My tech journey has
        been greatly inspired by my brother <b className="inspire">OLUWASEGUN OJO!!</b>
      </p>
      
      <h2 className="about">Hobbies and Other Skills</h2>
      <p className="paragraph">
        I love singing, also love dancing but not the best at it. My other
        skills are drawing and painting.
      </p>
</div> 
</>
)
}