import React, { Component } from 'react';
import style from './questionTest.css';
import { getTranslation } from '../../translations';

class QuestionTest extends Component {
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
            <div className={style.parent + "container"}>
            <div className="row">
                <div className={style.children + " col"}>
                    <ul className="list-unstyled">
                        <li>
                            <div onClick={(e)=>this.togglePanel(e)} className={style.header}>
                                    <h4>{text}</h4>
                            </div>
                            {this.state.open ? (
                                <div className={style.content}>
                                      {answer}
                                </div>
                                ) : null}
                        </li>
                    </ul>
                </div>
                <div className={style.children + " col"}>
                    <ul className="list-unstyled">
                        <li>
                            <div onClick={(e)=>this.togglePanel(e)} className={style.header}>
                                    <h4>{text}</h4>
                            </div>
                            {this.state.open ? (
                                <div className={style.content}>
                                      {answer}
                                </div>
                                ) : null}
                        </li>
                    </ul>
                </div>
                <div className="w-100"></div>
            </div>
            </div>
        );
      }
}

export default QuestionTest;