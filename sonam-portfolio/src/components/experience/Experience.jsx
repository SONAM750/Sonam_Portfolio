import React from "react";
import CubicCert from '../../../public/CubicCert.pdf';
import './experience.css';
function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>

        <div className="experience-card">
          <h3>Cubic Logic</h3>
          <p className="role">SDE Intern</p>
          <p className="duration">July 2024 – Present</p>

          <p className="description">
            Worked on React and SharePoint (SPFx) based enterprise applications.
            Built reusable UI components, handled data integration, and improved
            application performance.
          </p>

          <div className="experience-tags">
            <span>React</span>
            <span>SPFx</span>
            <span>JavaScript</span>
            <span>Fluent UI</span>
          </div>

          <a
            href={CubicCert}
            target="_blank"
            className="cert-link"
            rel="noreferrer"
          >
            View Internship Certificate
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;
