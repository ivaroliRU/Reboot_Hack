import React, { Component } from 'react';
import style from './question.css';
import { getTranslation, changeLanguage } from '../../translations';

const Collapse = window.Collapse;
const cx = window.classNames;

class Question extends Component {
  /* state = {
    index: 1
  }; */

  onToggle = 
    this.setState(state => ({ index: state.index === index ? null : index }));

  render() {
    this.text = getTranslation();
    const { text, answer } = this.props; 
    return (
      <section className="app">

        <div className={cx("item", { "item__active": this.state.index === 1 })}>
          <button className="btn" onClick={() => this.onToggle(1)}>
            <span>{text}</span> <span>{this.state.item1}</span>
          </button>
          <Collapse
            className="collapse"
            isOpen={this.state.index === 1}
            onChange={({ state }) => {
              this.setState({ item1: state });
            }}
            onInit={({ state }) => {
              this.setState({ item1: state });
            }}
            render={answer}
          />

        </div>
        
      </section>
    );
  }
}

// ReactDOM.render(<Question />, document.querySelector("#react-app"));
export default Question;



