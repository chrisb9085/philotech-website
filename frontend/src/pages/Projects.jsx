import { Link } from 'react-router-dom';
import '../styling/Projects.css';
import runwai from '../assets/images/runwai_logo.png';
import nnfs from '../assets/images/nn-logo1.jpg';
import l_quest from '../assets/images/lifequest_logo.png';


function Projects() {
  const projects = [
    {
      id: 1,
      title: "RunwAI",
      description: "RunwAI is a personal AI stylist that uses images of your own clothing to generate stylish outfits based on inputs like weather, occasion and color preference. Initially started as an Init BUILD project, RunwAI has since evolved into a fully launched site.",
      technologies: ["Python", "Javascript", "React", "Flask", "Supabase", "OpenAI's CLIP"],
      image: runwai,
      github: "https://github.com/chrisb9085/outfit-ai",
      site: "https://runwai-stylist.vercel.app/login"
    },
    {
      id: 2,
      title: "Neural Network from Scratch",
      description: "This project is a neural network that is built from scratch using only numpy. It uses a rectified linear activation function as well as a softmax for the final layer, and can also calculate loss.",
      technologies: ["Python", "Numpy"],
      image: nnfs,
      github:"https://github.com/chrisb9085/nn-from-scratch"
    },
    {
      id: 3,
      title: "LifeQuest",
      description: "LifeQuest is your personal gameified AI life coach, designed to motivate you by smartly scheduling tasks and integrating with your personal calendar. It also rewards you with experience points for completing tasks, compete with your friends to see who can hold the longest login streak or reach the higher level!",
      technologies: ["Python", "Javascript", "React", "Fast API", "Supabase", "Gemini 2.0", "Google ADK", "Google OAuth"],
      image: l_quest,
      github: "https://github.com/chrisb9085/agentic-routine"
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
                  {project.image === "Image" ? (
                    <span>{project.image}</span>
                  ) : (
                    <img src={project.image} alt={project.title} />
                  )}
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-link">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                    {project.site && <a href={project.site} target="_blank" rel="noopener noreferrer">Website</a>}
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