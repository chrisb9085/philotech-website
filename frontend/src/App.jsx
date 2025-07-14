import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styling/App.css';

function App() {
  return (
    <Router>
      <head>
        <title>Philotech</title>
        <meta name="description" content="Philotech is a portfolio website for Philo Tech, a technology company that specializes in software development and consulting." />
        <meta name="keywords" content="Philotech, Philo Tech, software development, consulting, portfolio" />
        <meta name="author" content="Philo Tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </head>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
