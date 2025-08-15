import { Link } from 'react-router-dom';
import '../styling/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="page-container">
        <div className="page-header">
          <Link to="/" className="back-button">← Back to Home</Link>
          <h1>Contact Me</h1>
        </div>
        
        <div className="contact-sections">
          <div className="section contact-info">
            <h2>Get In Touch</h2>
            <p>
              I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in technology and innovation. Whether you have a project idea, want to discuss opportunities, or just want to say hello, I'd love to hear from you. Feel free to reach out through my email below or use the contact form.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h3>Email</h3>
                <p>contact.philotech@gmail.com</p>
              </div>
              <div className="contact-item">
                <h3>Location</h3>
                <p>Miami, FL, USA</p>
              </div>
              <div className="contact-item">
                <h3>Social</h3>
                <div className="social-links">
                  <a href="https://github.com/chrisb9085" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                  </a>
                  <a href="https://linkedin.com/in/chrisb9085" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="section contact-form">
            <h2>Send a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your.email@example.com" />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject of your message" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your message here..."></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 