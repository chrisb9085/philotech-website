import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styling/Home.css';
import Portrait2 from '../assets/images/Portrait2.jpg';
import logo from '../assets/Icons/logo.png';
import logoIcon from '../assets/Icons/logo-icon.png';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`home-container ${isLoaded ? 'loaded' : ''}`}>
      <div className="page-container">
        <div className="hero-section">
          <div className="hero-content">
            {/* Left side - Large photo */}
            <div className="photo-section">
              <div className="photo-placeholder">
                <img 
                  src={Portrait2} 
                  alt="Portrait " 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }}
                />
              </div>
            </div>
            {/* Right side - Content */}
            <div className="content-section">
              {/* Main heading */}
              <h1 className="main-heading">
                Welcome to <span className="logo-in-heading"><img src={logo} alt="PhiloTech Logo" /></span>
              </h1>
              <h2 className="sub-heading">Built with purpose. Led by curiosity.</h2>
              
              {/* Navigation buttons */}
              <div className="nav-buttons">
                <Link to="/about" className="nav-button">
                  About
                </Link>
                <Link to="/projects" className="nav-button">
                  Projects
                </Link>
                <Link to="/contact" className="nav-button">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          
          {/* Summary section below */}
          <div className="summary-section">
            <h2 className="summary-heading">Summary</h2>
            <div className="summary-content">
              <p>
              Philotech is a student-led tech startup building AI-driven tools that solve real problems. 
              Founded with a focus on learning through execution, Philotech serves as a creative lab for 
              developing smart, scalable software—from MVPs to polished products. We turn curiosity into code, 
              experimenting with emerging tech while staying grounded in practical use cases.
              </p>
              <p>
              Interested in collaborating or learning more? 
              Explore our projects or get in touch to see how we can work together 
              to build something impactful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 