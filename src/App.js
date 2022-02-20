import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet"

function App() {
  return (
    <div className="App">
            <Greet name = "Sarah"/>
            <Greet name = "Harold"/>
            <Greet name = "Yoshuah" />
      <header className="App-header">
       <h1>tan-app</h1> 
       <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
