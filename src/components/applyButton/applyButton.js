import React, { Component } from 'react';
import style from "./applyButton.css";
import {getTranslation} from '../../translations';

class ApplyButton extends Component {
    constructor(props) {
        super(props);
    }

    /* Add functionality to handleClick() */

    render() {
        this.text = getTranslation();
        return (
            <div className="container">

            <div className="text-center">
                <button type="button" className={style.apply_button + "btn btn-info btn-lg mb-4"} data-toggle="modal" data-target="#modalRegisterForm">
                    {this.text.register.subHeading}
                </button>
            </div>

                <div className="modal fade" id="modalRegisterForm" tabIndex="-1" role="dialog" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content mx-3">
                            {/* header */}
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h3 className="modal-title">{this.text.register.registerDialog.title}</h3>
                            </div>
                            {/* body */}
                            <div className="modal-body">
                                <div className="form-group">
                                    
                                    {/* Name */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="Name" type="text" required></input>
                                    </div>
                                    {/*<div className="md-from-group m-4">
                                        <input type="name" className="form-control" placeholder="Name" />
                                    </div>*/}
                                    
                                    {/* Email */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="Email" type="email" required></input>
                                    </div>

                                    {/* All below this are optional for applicants */}
                                    {/* Phone */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="Phone number" type="text"></input>
                                    </div>

                                    {/* School */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-building"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="School" type="text"></input>
                                    </div>

                                    {/* Study */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-graduation-cap"></i> </span>
                                        </div>
                                        <input name="" className="form-control" placeholder="Field of Study" type="text"></input>
                                    </div>

                                    {/* Team */}
                                    <div className="form-group input-group-checkbox">
                                        <div className="input-group">
                                            <label className="form-check form-check-inline">
                                                <span className="input-group-text"> <i className="fa fa-users"></i> </span>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <input name="" className="form-check-input" type="checkbox" id="teamCheck"></input>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <label for="teamCheck" className="form-control-label" >I am a part of a team!</label>
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* footer */}
                            <div className="modal-footer">
                                <button className="btn btn-primary btn-block">{this.text.register.registerDialog.registerBtn}</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            );
    }
}    

export default ApplyButton;