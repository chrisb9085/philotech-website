import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styling/Home.css';

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
                <span>Your Photo Here</span>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="content-section">
              {/* Main heading */}
              <h1 className="main-heading">Welcome to PhiloTech</h1>
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
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 