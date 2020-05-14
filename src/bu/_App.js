import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Freezing!!
        </p>
        <a
          className="App-link"
          href="http://kimmisol.com/maskMap/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Movie App with GraphQL  
        </a>
      </header>
    </div>
  );
}

export default App;
