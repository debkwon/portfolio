import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="App-name"><Link to="/work">Dmk</Link></h2>
            <button><Link to="/work">WORK</Link></button>
            <button><Link to="/about">ABOUT.ME</Link></button>
        </div>
      </div>
    );
  }
}

export default App;
