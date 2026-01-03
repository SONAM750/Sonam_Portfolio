import React from "react";
import SonamResume from '../../../public/SonamResume.pdf'
import './aboutsec.css';
function Aboutsec() {
  return (
    <>
      <div className="aboutsec">
        <div className="leftsec">
             <p>
          I’m a passionate web developer skilled in React, SPFx, JavaScript, and
          CSS. I enjoy building modern, user-friendly web applications and clean
          UI interfaces. Currently, I am working as an SDE Intern, gaining
          real-world experience and continuously improving my development
          skills.
        </p>
        </div>
        <div className="rightsec">
           <a href="SonamResume.pdf" target="_blank"> <button>Download Resume</button></a>
           
        </div>
       
      </div>
    </>
  );
}

export default Aboutsec;
