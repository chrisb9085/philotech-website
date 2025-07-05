import { Link } from 'react-router-dom';
import '../styling/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "RunwAI",
      description: "RunwAI is a personal AI stylist that uses images of your own clothing to generate stylish outfits based on inputs like weather, occasion and color preference. Initially started as an Init BUILD project, RunwAI has since evolved into a fully launched site.",
      technologies: ["React", "Flask", "Supabase", "OpenAI's CLIP"],
      image: "Image"
    },
    {
      id: 2,
      title: "ProfilePilot",
      description: "ProfilePilot is a platform that allows users to sync their professional profiles with their resumes. ProfilePilot scans a user's resume and checks for any new or updated information, and then updates the user's profile accordingly. Then, using web automation technology, ProfilePilot automatically updates professional profiles on sites like LinkedIn, Handshake, Indeed, and more.",
      technologies: ["React", "Flask", "Supabase", "Selenium", "OpenAI's GPT-4o"],
      image: "Image"
    },
    {
      id: 3,
      title: "Neural Network from Scratch",
      description: "This project is a neural network that is built from scratch using only numpy. It is a simple feedforward neural network that is able to learn the XOR function.",
      technologies: ["Python", "Numpy"],
      image: "Image"
    }
  ];

  return (
    <div className="projects-container">
      <div className="page-container">
        <div className="projects-content">
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
    </div>
  );
}

export default Projects; 