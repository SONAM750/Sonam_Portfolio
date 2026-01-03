

import './project.css';
import ProjectData from './ProjectData.js';

const Projectsec = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {ProjectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projectsec;
