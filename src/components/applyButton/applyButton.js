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
            $("modalRegisterForm").modal('hide');
            $("#successModal").modal('show');
        });
    }

    render() {
        this.text = getTranslation();
        return (
            <div className="container">

                <div className="text-center">
                    <button type="button" className={"btn btn-outline-primary btn-lg mb-4 "+style.apply_button} data-toggle="modal" data-target="#modalRegisterForm">
                        {this.text.register.subHeading}
                    </button>
                </div>

                <div className="modal fade" id="modalRegisterForm" tabIndex="-1" role="dialog" >
                    <div className="modal-dialog" role="document">
                        <div className={"modal-content mx-3 " +style.modal_content}>
                            {/* header */}
                            <div className="modal-header">
                                <h3 className="modal-title">{this.text.register.registerDialog.title}</h3>
                                <button type="button" className={"close "+style.close } data-dismiss="modal">&times;</button>
                            </div>
                            {/* body */}
                            <div className="modal-body">
                                <div className="form-group">
                                    <div className="form-row">
                                    
                                    
                                    {/* Name */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className={"input-group-text "+ style.inputGroupTextStyle}> <i className={"fa fa-user "+style.iconMarginLeft}></i> </span>
                                        </div>
                                        <input id="reg_name" className="form-control" placeholder={this.text.register.registerDialog.name} type="text" required></input>
                                    </div>
                                    
                                    {/* Email */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className={"input-group-text "+ style.inputGroupTextStyle}> <i className={"fa fa-envelope "+style.iconMarginLeft}></i> </span>
                                        </div>
                                        <input id="reg_email" type="email" className="form-control" placeholder={this.text.register.registerDialog.email} required></input>
                                    </div>

                                    {/* School */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className={"input-group-text "+ style.inputGroupTextStyle}> <i className={"fa fa-building "+style.iconMarginLeft}></i> </span>
                                        </div>
                                        <input id="reg_school" className="form-control" placeholder={this.text.register.registerDialog.school} type="text" required></input>
                                    </div>

                                    {/* Study */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className={"input-group-text "+ style.inputGroupTextStyle}> <i className={"fa fa-graduation-cap "+style.iconMarginLeft}></i> </span>
                                        </div>
                                        <input id="reg_study" className="form-control" placeholder={this.text.register.registerDialog.study} type="text" required></input>
                                    </div>

                                    {/* T-shirt Size */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className={"input-group-text "+ style.inputGroupTextStyle}> <i className={"fa fa-smile-o "+style.iconMarginLeft}></i> </span>
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
                                            <span className={"input-group-text "+ style.inputGroupTextStyle}> <i className={"fa fa-cutlery "+style.iconMarginLeft}></i> </span>
                                        </div>
                                        <input id="reg_food" className="form-control" placeholder={this.text.register.registerDialog.diet} type="text"></input>
                                    </div>

                                    {/* Team */}
                                    <div className="form-group input-group-checkbox">
                                        <div className="input-group">
                                            <label className="form-check form-check-inline">
                                                <span className={"input-group-text "+ style.inputGroupTextStyle}> <i className={"fa fa-users "+style.iconMarginLeft}></i> </span>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <input id="reg_team" className="form-check-input" type="checkbox"></input>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <label className={"form-control-label "+style.labelAligned} >{this.text.register.registerDialog.team}</label>
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
                                <button className={"btn btn-primary btn-block " +style.register_button} type="submit" onClick={this.handleClick}>{this.text.register.registerDialog.registerBtn}</button>
                            </div>                            

                        </div>
                    </div>
                </div>

            </div>
            );
    }
}    

export default ApplyButton;