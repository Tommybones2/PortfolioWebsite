import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Investments from './Investments';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="name-container">
            <h1>Thomas Bonagura</h1>
            <div className="links">
              <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </header>
        <main>
          <nav>
            <Link to="/investments">Investments</Link>
            <Link to="/about">About</Link>
          </nav>
          <Route exact path="/" render={() => (
            <div className="homepage-content">
              {/* add your homepage content here */}
            </div>
          )} />
          <Route path="/investments" component={Investments} />
          <Route path="/about" component={About} />
        </main>
      </div>
    </Router>
  );
}

export default App;

