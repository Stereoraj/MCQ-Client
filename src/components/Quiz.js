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
                    <div id={0}><p>{ this.props.question.answers[0] }</p></div>
                    <div id={1}><p>{ this.props.question.answers[1] }</p></div>
                    <div id={2}><p>{ this.props.question.answers[2] }</p></div>
                    <div id={3}><p>{ this.props.question.answers[3] }</p></div>
                </div> 
                <div className="next-btn" onClick={this.props.clickButton}>
                    <a>Next</a>
                </div>
            </div>
        );
    }
}

export default Quiz;