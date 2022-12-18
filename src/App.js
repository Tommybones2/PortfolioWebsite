import React from 'react';
import './App.css';

function App() {
  return (
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
          <a href="/investments">Investments</a>
          <a href="/about">About</a>
        </nav>
        <div className="homepage-content">
          {/* add your homepage content here */}
        </div>
      </main>
    </div>
  );
}

export default App;
