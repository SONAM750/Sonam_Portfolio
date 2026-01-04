import React from "react";
import SonamResume from "../../../public/SonamResume.pdf";
import "./aboutsec.css";

function Aboutsec() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <p className="about-text">
          I’m a passionate web developer skilled in React, SPFx, JavaScript, and
          CSS. I enjoy building modern, user-friendly web applications and clean
          UI interfaces.
        </p>

        <p className="about-text">
          Currently, I am working as an SDE, gaining real-world experience
          and continuously improving my development skills.
        </p>

        <a className="resume-btn" href="/SonamResume.pdf" download>
          Download Resume
        </a>
      </div>
    </section>
  );
}


export default Aboutsec;
