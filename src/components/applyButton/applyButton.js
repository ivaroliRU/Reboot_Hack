import React, { Component } from 'react';
import style from "./applyButton.css";
import {getTranslation} from '../../translations';

class ApplyButton extends Component {
    constructor(props) {
        super(props);
    }

    /* Add functionality to handleClick() */
    handleClick() {
        var registerInfo = {
            name: $("#reg_name").val(),
            email: $("#reg_email").val(),
            school: $("#reg_school").val(),
            study: $("#reg_study").val(),
            tShirt: $("#reg_tShirt").val(),
            food: $("#reg_food").val(),
            team: $("#reg_team").val(),
        };

        $.post( "/api/applications/apply", registerInfo, function( data ) {
            $("#successModal").modal('show');
        });
    }

    render() {
        this.text = getTranslation();
        return (
            <div className="container">

                <div className="text-center">
                    <button type="button" className={style.apply_button + "btn btn-outline-primary btn-lg mb-4"} data-toggle="modal" data-target="#modalRegisterForm">
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
                                        <input id="reg_name" className="form-control" placeholder={this.text.register.registerDialog.name} type="text" required></input>
                                    </div>
                                    
                                    {/* Email */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                        </div>
                                        <input id="reg_email" type="email" className="form-control" placeholder={this.text.register.registerDialog.email} required></input>
                                    </div>

                                    {/* School */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-building"></i> </span>
                                        </div>
                                        <input id="reg_school" className="form-control" placeholder={this.text.register.registerDialog.school} type="text" required></input>
                                    </div>

                                    {/* Study */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-graduation-cap"></i> </span>
                                        </div>
                                        <input id="reg_study" className="form-control" placeholder={this.text.register.registerDialog.study} type="text" required></input>
                                    </div>

                                    {/* T-shirt Size */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-smile"></i> </span>
                                        </div>
                                        <select id="reg_tShirt" className="form-control" placeholder={this.text.register.registerDialog.study} type="text" required>
                                            <option>{this.text.register.registerDialog.tShirt}</option>
                                            <option>Small</option>
                                            <option>Medium</option>
                                            <option>Large</option>
                                            <option>X Large</option>
                                            <option>2X Large</option>
                                            <option>3X Large</option>
                                        </select>
                                    </div>

                                     {/* Diet */}
                                     {/* Better to have NOT required, what if you don't have any allergies? */}
                                     <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-cutlery"></i> </span>
                                        </div>
                                        <input id="reg_food" className="form-control" placeholder={this.text.register.registerDialog.diet} type="text"></input>
                                    </div>

                                    {/* Team */}
                                    <div className="form-group input-group-checkbox">
                                        <div className="input-group">
                                            <label className="form-check form-check-inline">
                                                <span className="input-group-text"> <i className="fa fa-users"></i> </span>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <input id="reg_team" className="form-check-input" type="checkbox"></input>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <label className="form-control-label" >{this.text.register.registerDialog.team}</label>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Email conformation */}
                                    <small id="emailConformation" className="form-text text-muted">
                                        {this.text.register.registerDialog.emailInfo}
                                        </small>
                                    
                                    </div>
                                </div>
                            </div>
                            
                            {/* footer */}
                            {/* redirects to conformation site.. Just for conformation!  */}
                            <div className="modal-footer modal-guts">
                                <button className="btn btn-primary btn-block" type="submit" onClick={this.handleClick}>{this.text.register.registerDialog.registerBtn}</button>
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