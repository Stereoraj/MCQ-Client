import React from 'react';
import {Component} from "react";

import './App.css';
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import ques from "./utils/question"

class App extends Component {
  state = {
    counter: 0,
    score: 0
  }

  questions = undefined;

  constructor() {
    super();
    this.questions = (ques).questions;
    console.log(this.questions);
  }

  clickButton = () => {
    console.log("button clicked !!");
    this.setState((state, props) => ({
      counter: state.counter + 1
    }));
    console.log(this.state.counter)
  }

  render() {
    console.log("rendering");
    if(this.state.counter >= 10) {
      return (
        <div className="app">
          <Result score={this.state.score}/>
        </div>
      );
    }else {
      console.log("rendering again", this.questions[this.state.counter]); 
      return (
        <div className="app">
          <Quiz question={this.questions[this.state.counter]} counter={this.state.counter} clickButton={this.clickButton.bind(this)}/>
        </div>
      );
      
    }
  }
}

export default App;
