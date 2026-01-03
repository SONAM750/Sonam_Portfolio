import React from "react";
import "./hero.css";
import github from '../../assets/icons/github.svg';
import gmail from '../../assets/icons/gmail.svg';
import sonamimage from "../../assets/sonamimage.png";
import linkedin from '../../assets/icons/linkedin.svg';
function Hero() {
  return (
    <>
      <div className="herodiv">
        <div className="leftsection">
          <h1>Hi, I'm Sonam</h1>
          <h2>React & SharePoint Developer</h2>
          <p>
            I build modern web applications and enterprise SharePoint solutions.
          </p>
          <div className="btncont">
            <button>Hire Me</button>
            <button>View Projects</button>
          </div>
          <div className="icondiv">
            <a href='https://github.com/SONAM750' target='_blank'>
                <img src={github} alt="GitHub" width={28} />
            </a>
           <a href='mailto:skk482352@gmail.com' target='_blank'>
              <img src={gmail} alt="GitHub" width={28} />
           </a>
            <a href='http://www.linkedin.com/in/sonam7' target='_blank'>
              <img src={linkedin} alt="GitHub" width={34} />
           </a>
          
          </div>
        </div>
        <div className="rightsec">
          <img src={sonamimage} alt="pic"></img>
        </div>
      </div>
    </>
  );
}

export default Hero;
