import React from 'react';
import {Component} from "react";
import './App.css';
import Quiz from "./components/Quiz";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Quiz />
      </div>
    );
      
    
  }
}

export default App;
