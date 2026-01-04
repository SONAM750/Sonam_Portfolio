import React from "react";
import "./hero.css";
import github from '../../assets/icons/github.svg';
import gmail from '../../assets/icons/gmail.svg';
// import sonamimage from "../../assets/sonamimage.png";
// import sonamimage from "../../assets/sonam1.jpg";
// import developergirl from '../../assets/developergirl.jpeg';
import  developer  from "../../assets/developer.png";
import linkedin from '../../assets/icons/linkedin.svg';
function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        <div className="hero-left">
          <h1>Hi, I'm Sonam</h1>
          <h2>React & SharePoint Developer</h2>
          <p>
            I build modern web applications and enterprise SharePoint solutions.
          </p>

          <div className="btncont">
            <button className="hireme">Hire Me</button>
            <button className="viewproject">View Projects</button>
          </div>

          <div className="icondiv">
            <a href="https://github.com/SONAM750" target="_blank">
              <img src={github} alt="GitHub" width={28} />
            </a>
            <a href="mailto:skk482352@gmail.com">
              <img src={gmail} alt="Gmail" width={28} />
            </a>
            <a href="http://www.linkedin.com/in/sonam7" target="_blank">
              <img src={linkedin} alt="LinkedIn" width={32} />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img src={developer} alt="Sonam" />
        </div>

      </div>
    </section>
  );
}


export default Hero;
