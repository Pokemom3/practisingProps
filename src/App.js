import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Greet name="Sarah" Age="29">
        <p>Trialling props.children</p>
      </Greet>
      <Greet name="Harold" Age="34" />
      <Greet name="Yoshuah" Age="45" />
      <Button />
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
          Press to learn more React
        </a>
      </header>
    </div>
  );
}

export default App;
