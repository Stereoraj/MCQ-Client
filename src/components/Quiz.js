import React, {Component} from "react";

class Quiz extends Component {
    render() {
        return (
            <div className="quiz">
                <p className="question"> Q. This is the sample question ?</p>
                <div className="options">
                    <p>Option 1</p>
                    <p>Option 2</p>
                    <p>Option 3</p>
                    <p>Option 4</p>
                </div> 
                <div className="next-btn">
                    <a>Next</a>
                </div>
            </div>
        );
    }
}

export default Quiz;