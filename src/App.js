import React from 'react';
import {Component} from "react";

import './App.css';
import Quiz from "./components/Quiz";
import Result from "./components/Result";

class App extends Component {
  state = {
    counter: 0,
    score: 0
  }


  render() {
    if(this.state.counter > 10) {
      return (
        <div className="app">
          <Result score={this.state.score}/>
        </div>
      );
    }else {
      return (
        <div className="app">
          <Quiz />
        </div>
      );
      
    }
  }
}

export default App;
