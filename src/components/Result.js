import React, {Component} from "react";

class Result extends Component {
    score = this.props.score;
    percentage = ( this.score / 10 ) * 100;

    render() {
        if(this.percentage > 40) {
            return (
                <div>
                    <p>The score is { this.score }</p>
                    <p> Passed !!</p>
                </div>
            );
        } else {
            return (
                <div>
                    <p>The score is { this.score }</p>
                    <p> Failed !!</p>
                </div>
            );
        }
        
    }
}

export default Result;