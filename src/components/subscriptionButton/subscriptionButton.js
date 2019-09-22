import React, { Component } from 'react';
import style from "./subscriptionButton.css"

class SubscriptionButton extends Component {
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
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
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