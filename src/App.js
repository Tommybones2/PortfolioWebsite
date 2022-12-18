import React from "react";
import "./App.css";
import RealEstate from "./RealEstate";

// The main component for the website
class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* The header of the website */}
        <header className="App-header">
          <h1>Portfolio Website</h1>
        </header>
        {/* The main content of the website */}
        <main className="App-main">
          {/* The GitHub section */}
          <section className="GitHub-section">
            <h2>GitHub</h2>
            <p>
              Check out my GitHub profile at{" "}
              <a href="https://github.com/Tommybones2" target="_blank" rel="noopener noreferrer">
                https://github.com/Tommybones2
              </a>
            </p>
          </section>
          {/* The Real Estate section */}
          <section className="RealEstate-section">
            <h2>Real Estate</h2>
            <RealEstate />
          </section>
        </main>
        {/* The footer of the website */}
      </div>
    );
  }
}

export default App;
