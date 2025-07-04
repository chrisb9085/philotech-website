import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "Image"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      image: "Image"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      technologies: ["JavaScript", "API", "CSS"],
      image: "Image"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      technologies: ["React", "Vite", "CSS"],
      image: "Image"
    }
  ];

  return (
    <div className="projects-container">
      <div className="page-container">
        <div className="page-header">
          <Link to="/" className="back-button">← Back to Home</Link>
          <h1>My Projects</h1>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-image">
                <span>{project.image}</span>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects; 