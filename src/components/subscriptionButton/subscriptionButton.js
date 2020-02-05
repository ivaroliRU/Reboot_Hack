import React, { Component } from 'react';
import style from "./subscriptionButton.css";
import {getTranslation} from '../../translations';

class SubscriptionButton extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        var email = {email: $("#sub_email").val()};

        $.post( "/api/subscriptions", email, function( data ) {
            $("#successModal").modal('show');
        });
    }

    
    render() {
        this.text = getTranslation();
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className={style.single}>
                        <div className="input-group">
                        <input id="sub_email" type="email" className={"form-control " + style.sub_form} placeholder="Enter your email" required></input>
                        <span className="input-group-btn">
                            <button className={"btn btn-theme " + style.form_btn} type="submit" onClick={this.handleClick}>Subscribe</button>
                        </span>
                        </div>
                    </div>
                </div>


                <div id="successModal" className="modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Success!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Thank you for subscribing to out newsletter!.</p>
                        </div>
                        <div className="modal-footer">
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