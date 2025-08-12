// src/App.tsx

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Consultation from './components/Consultation';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navigation">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/work-experience" className="nav-link">Work Experience</Link>
          <Link to="/education" className="nav-link">Education</Link>
          <Link to="/consultation" className="nav-link">Consultation</Link>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/consultation" element={<Consultation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
