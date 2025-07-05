import { Link } from 'react-router-dom';
import '../styling/About.css';

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
              Hi, I'm Christopher Belizaire, a Computer Science student at Florida International University (FIU) 
              with a passion for cutting-edge technology. I'm the founder of PhiloTech, a company I developed 
              to showcase my professional projects and pursue my entrepreneurial dreams.
            </p>
            <p>
              My academic journey is driven by deep interests in Artificial Intelligence, Machine Learning, 
              and Quantum Computing. I'm constantly learning multiple programming languages and experimenting 
              with my passions through personal projects. PhiloTech serves as both a professional portfolio 
              for recruiters and a platform to demonstrate my technical expertise and entrepreneurial spirit.
            </p>
          </div>
          
          <div className="section">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-item">Java</div>
              <div className="skill-item">Python</div>
              <div className="skill-item">React</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">Git</div>
              <div className="skill-item">Jira Software</div>
              <div className="skill-item">Database Management</div>
              <div className="skill-item">Selenium</div>
              <div className="skill-item">QA Testing</div>
              <div className="skill-item">Appium</div>
              <div className="skill-item">Automation Testing</div>
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