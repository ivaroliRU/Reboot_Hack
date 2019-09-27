import React, { Component } from 'react';
import './question.css';

class Question extends Component {
    render () {
        const { text, answer } = this.props;
        console.log(this.props);

        return (
            <div>
                <h3>{text}</h3>
                <p dangerouslySetInnerHTML={{ __html: answer}}/>
                <p>HALLO</p>
            </div>
        );
    }
}

export default Question;