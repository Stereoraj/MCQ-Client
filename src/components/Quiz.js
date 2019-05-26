import React, {Component} from "react";

class Quiz extends Component {
    
    // questionNumber= this.props.counter + 1;
    // question= this.props.question.question;
    // answers= this.props.question.answers;
    

    // componentWillReceiveProps() {
    //     this.questionNumber= this.props.counter + 1;
    //     this.question= this.props.question.question;
    //     this.answers= this.props.question.answers;  
    // }
    
    render() {
        console.log("rendering quiz ", this.props.question);
        return (
            <div className="quiz">
                <p className="question"> Q.{this.props.counter + 1} {this.props.question.question}</p>
                <div className="options">
                    <button id={0} onClick={this.props.answerClick.bind(this, 0, this.props.question.correctAnswer)}>{ this.props.question.answers[0] }</button>
                    <button id={1} onClick={this.props.answerClick.bind(this, 1, this.props.question.correctAnswer)}>{ this.props.question.answers[1] }</button>
                    <button id={2} onClick={this.props.answerClick.bind(this, 2, this.props.question.correctAnswer)}>{ this.props.question.answers[2] }</button>
                    <button id={3} onClick={this.props.answerClick.bind(this, 3, this.props.question.correctAnswer)}>{ this.props.question.answers[3] }</button>
                </div> 
                <div className="next-btn" onClick={this.props.clickButton}>
                    <a>Next</a>
                </div>
            </div>
        );
    }
}

export default Quiz;