import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import InvestmentsPage from './InvestmentsPage';
import AboutPage from './AboutPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="name-container">
          <h1>Thomas Bonagura</h1>
          <div className="orb"></div>
          <div className="orb"></div>
          <div className="orb"></div>
        </div>
        <div className="links-container">
          <div className="link-box" style={{ backgroundColor: 'lightblue' }}>
            <a href="https://github.com/Tommybones2" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="link-box" style={{ backgroundColor: 'pink' }}>
            <a href="https://path-to-resume" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
          <div className="link-box" style={{ backgroundColor: 'lightgreen' }}>
            <a href="https://path-to-thisSourceCode" target="_blank" rel="noopener noreferrer">This Source Code</a>
          </div>
        </div>
      </header>
      <main>
        <nav>
          <Link to="/investments">Investments</Link>
          <Link to="/about">About</Link>
        </nav>
        <div className="homepage-content">
          {/* Homepage content goes here */}
          <Routes>
            <Route path="/investments" element={<InvestmentsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
 