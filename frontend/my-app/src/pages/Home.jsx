import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="page-container">
        <div className="hero-section">
          <div className="hero-content">
            {/* Left side - Photo slot */}
            <div className="photo-section">
              <div className="photo-placeholder">
                <span>Image</span>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="content-section">
              {/* Greeting */}
              <h1 className="greeting">Hello, I'm [Your Name]</h1>
              
              {/* Summary */}
              <div className="summary-content">
                <h2>Quick Summary</h2>
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
        </div>
      </div>
    </div>
  );
}

export default Home; 