import React from "react";
import "./skills.css";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import github from "../../assets/github.png";
import sharepoint from "../../assets/sharepoint.png";
import sql from "../../assets/sql.png";
import java from "../../assets/java.png";

const skillsData = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "React", icon: react },
  { name: "GitHub", icon: github },
  { name: "SharePoint", icon: sharepoint },
  { name: "SQL", icon: sql },
   { name: "Java", icon: java },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-subtitle">
  Technologies and tools I use to build modern web applications
</p>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.icon} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
