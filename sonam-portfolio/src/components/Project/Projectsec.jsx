import "./project.css";
import ProjectData from "./ProjectData.js";

const Projectsec = () => {
  return (
    <section className="projects" id="projects">
      <div className="project-container">

    
      <h2 className="project-title">Projects</h2>

      <div className="projects-grid">
        {ProjectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

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
      </div>
    </section>
  );
};

export default Projectsec;
