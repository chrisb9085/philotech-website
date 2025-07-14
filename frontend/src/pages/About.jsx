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
            
            <div className="experience-category">
              <h3>Professional Experience</h3>
              <div className="experience-item">
                <h4>Founder & CEO - PhiloTech</h4>
                <p className="experience-period">August 2025 - Present</p>
                <p>Leading the development of a professional portfolio platform and pursuing entrepreneurial ventures in technological innovation.</p>
              </div>
              <div className="experience-item">
                <h4> QA Tester (Intern) - TechPhare Dynamic Solutions</h4>
                <p className="experience-period">May 2025 - Present</p>
                <p>Testing and debugging a mobile application using Appium and Jira Software to ensure they meet quality standards and user requirements.</p>
              </div>
            </div>

            <div className="experience-category">
              <h3>Academic Experience</h3>
              <div className="experience-item">
                <h4>Computer Science Student - Florida International University</h4>
                <p className="experience-period">Aug 2024 - Present</p>
                <p>Pursuing a degree in Computer Science with a bias toward AI/ML, Quantum Computing, and software development.</p>
              </div>
            </div>

            <div className="experience-category">
              <h3>Relevant Coursework</h3>
              <div className="coursework-grid">
                <div className="course-item">Data Structures & Algorithms</div>
                <div className="course-item">Programming I & II</div>
                <div className="course-item">Calculus I & II</div>
                <div className="course-item">Computer Architecture</div>
                <div className="course-item">Discrete Mathematics</div>
              </div>
            </div>

            <div className="experience-category">
              <h3>Leadership & Involvement</h3>
              <div className="experience-item">
                <h4>FIU Student Ambassador</h4>
                <p className="experience-period">August 2024 - Present</p>
                <p>Representing and providing tours to FIU's VIPs, as well as collaborating with other organizations to support university efforts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 