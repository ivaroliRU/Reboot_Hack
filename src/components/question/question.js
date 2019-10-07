import React, { Component } from 'react';
import style from './question.css';
import { getTranslation } from '../../translations';

class Question extends Component {
    constructor(props) {
        super(props);

        // initial state
        this.state = { open: false }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e) {
        this.setState({
            open: !this.state.open
        });
    }

    componentDidUpdate() {
        // this.props.onToggle(this.props.index);
    }
    render() {
        this.text = getTranslation();
        const { text, answer } = this.props; 
        return (
            <div>
                <div onClick={(e)=>this.togglePanel(e)} className={style.header}>
                    <h4>{text}</h4>
                </div>
                {this.state.open ? (
                    <div className={style.content}>
                          {answer}
                    </div>
                    ) : null}
            </div>
        );
      }
}

export default Question;