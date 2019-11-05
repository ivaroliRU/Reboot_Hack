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
                    <form name="registerForm">
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
                                    <div className="form-row">
                                    
                                    
                                    {/* Name */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                        </div>
                                        <input className="form-control" placeholder={this.text.register.registerDialog.name} type="text" required></input>
                                    </div>
                                    
                                    {/* Email */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                        </div>
                                        <input type="email" className="form-control" placeholder={this.text.register.registerDialog.email} required></input>
                                    </div>

                                    {/* All below this are optional for applicants */}
                                    <small id="infoOptional" className="form-text text-muted">
                                        {this.text.register.registerDialog.info}
                                        </small>


                                    {/* Phone */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                                        </div>
                                        <input className="form-control" placeholder={this.text.register.registerDialog.phone} type="text"></input>
                                    </div>

                                    {/* School */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-building"></i> </span>
                                        </div>
                                        <input className="form-control" placeholder={this.text.register.registerDialog.school} type="text"></input>
                                    </div>

                                    {/* Study */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-graduation-cap"></i> </span>
                                        </div>
                                        <input className="form-control" placeholder={this.text.register.registerDialog.study} type="text"></input>
                                    </div>

                                    {/* Team */}
                                    <div className="form-group input-group-checkbox">
                                        <div className="input-group">
                                            <label className="form-check form-check-inline">
                                                <span className="input-group-text"> <i className="fa fa-users"></i> </span>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" id="teamCheck"></input>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <label for="teamCheck" className="form-control-label" >{this.text.register.registerDialog.team}</label>
                                            </label>
                                        </div>
                                    </div>

                                    
                                    </div>
                                </div>
                            </div>
                            
                            {/* footer */}
                            {/* redirects to confirmation site.. Just for conformation!  */}
                            <div className="modal-footer modal-guts">
                                <a href="/confirmation" className="btn btn-primary btn-block" >{this.text.register.registerDialog.registerBtn}</a>
                            </div>                            

                        </div>
                    </div>
                    </form>
                </div>

            </div>
            );
    }
}    

export default ApplyButton;