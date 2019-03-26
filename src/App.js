import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { isAuthenticated } from './auth';

class App extends Component {
  
  componentDidMount() {
    // const auth = isAuthenticated();
    // console.log(auth)
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
}

export default App;
