import React, { Component } from 'react';
import style from "./subscriptionButton.css"
// import router from '../../../server/routes/subscription';

class SubscriptionButton extends Component {
    /* Gera fall handleClick. og þegar við */
    /* put */
    /*handleClick={} baeta svo thessu vid i button onClick={handleClick}*/
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.emailField = React.createRef()

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleClick(event) {
        // HÉR bæta við tengingu við api.js -> subscription
        //alert('An email was submitted: ' + this.state.value);
        event.preventDefault();
        var self = this;
        fetch('/api/subscriptions', {
            method: 'POST',
            body: {
                email: 'einar'
            }
        })
        .then(function(response) {
            return response.json()
          }).then(function(body) {
            console.log(body);
          });
    }
    
    render() {
        return (
            <div>
                <button type="button" className={style.subscibe_button + " btn btn-primary"} data-toggle="modal" data-target="#exampleModal">
                Subscribe
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{zIndex:1000}}>
                        <div className="modal-header">
                            <h5 className="modal-title">Hey there!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label>
                                email:
                                <input type="text" ref={this.emailField} value={this.state.value} onChange={this.handleChange}/>
                            </label>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={this.handleClick}>Subscribe</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubscriptionButton;