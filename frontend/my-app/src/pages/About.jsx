import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="page-container">
        <div className="page-header">
          <Link to="/" className="back-button">← Back to Home</Link>
          <h1>About Me</h1>
        </div>
        
        <div className="about-sections">
          <div className="section">
            <h2>Background</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
          <div className="section">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">React</div>
              <div className="skill-item">Node.js</div>
              <div className="skill-item">Python</div>
              <div className="skill-item">HTML/CSS</div>
              <div className="skill-item">Git</div>
            </div>
          </div>
          
          <div className="section">
            <h2>Experience</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 