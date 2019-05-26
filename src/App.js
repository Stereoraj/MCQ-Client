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

    for(let i = 0; i < 4; i++) {
      document.getElementById(i + "").disabled = false;
      document.getElementById(i + "").style.background = "rgb(210, 206, 206)";
    }

    document.getElementById("next-btn").style.pointerEvents = "none";    
    document.getElementById("next-btn").style.background = "rgb(1, 131, 191);";
  }

  answerClick = (param, param2,  e) => {
    if(param === param2) {
      this.setState((state, props) => ({
        score: state.score + 1
      }));
      document.getElementById(param).style.background = "rgb(0, 186, 10)";
    }else {
      document.getElementById(param).style.background = "rgb(186, 10, 0)";
    }

    for(let i = 0; i < 4; i++) {
      document.getElementById(i + "").disabled = true;
    }
    document.getElementById("next-btn").style.pointerEvents = "auto";
    console.log("answer clicked !!:", param, param2, e);
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
          <Quiz question={this.questions[this.state.counter]} counter={this.state.counter} clickButton={this.clickButton.bind(this)} answerClick={this.answerClick.bind(this)}/>
        </div>
      );
      
    }
  }
}

export default App;
