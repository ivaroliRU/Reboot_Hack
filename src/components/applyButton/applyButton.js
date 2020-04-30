import React, { Component } from 'react';
import style from "./applyButton.css";
import {getTranslation} from '../../translations';
import Cookies from 'js-cookie';

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
            $("#modalRegisterForm").modal('hide');
            $("#successModal").modal('show');
        });
        
    }
    
    
    render() {
        this.text = getTranslation();
        var extraText = "";

        if(Cookies.get('language')=='is'){
            extraText = 'Reboot Hack er fyrsta nemendadrifna hakkaþonið á Íslandi. Reboot Hack var stofnað af þremur vinkonum í tölvunarfæði við Háskóla Íslands árið 2018. Hakkaþon eru gríðarlega vinsæl út um allan heim og vill Reboot Hack skapa enn ríkar hakkaþonmenningu á Íslandi.';
        }
        else{
            extraText = 'Reboot Hack is the first ever student organized hackathon for students in Iceland. The hackathon was created by three friends studying Computer Science at the University of Iceland in 2018. Reboot Hack aims to bring the hackathon culture from Europe and America to Iceland.';
        }
        var buttonSection;

        var dateNow = new Date();
        if(dateNow.getTime() <= (new Date('Feb 15, 2020 08:00:00').getTime())){
            buttonSection = (
                <div className="text-center">
                    <button type="button" className={"btn btn-outline-primary btn-lg mb-4 "+style.apply_button} data-toggle="modal" data-target="#modalRegisterForm">
                        {this.text.register.subHeading}
                    </button>
                </div>
            )
        }
        else{
            buttonSection = (
                null
            )
        }

        return (
            <div className="container">
                {/* Info + registration button */}
                <div>
                    <p className="recap" dangerouslySetInnerHTML={{__html: extraText}} />
                </div>
                {buttonSection}
                {/* End of Info + registration Button  */}
                

                {/* Modal for confirmation of registration */}
                <div className="modal fade" id="successModal" tabIndex="-1" role="dialog" >
                    <div className="modal-dialog" role="document">
                        <div className={"modal-content mx-3 " +style.modal_content}>
                            {/* Modal Content */}
                            <div className="modal-content">
                            <div className="modal-header">
                            {/* Modal Header */}
                                <h6 className="modal-title">{this.text.register.registerConfirmation.title}</h6>
                            </div>
                            {/* Modal body */}
                            <div>
                                <p>{this.text.register.registerConfirmation.main}</p>
                            </div>
                            {/* Modal Footer */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close!</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Modal for confirmation of registration */}





                {/* Modal for registration */}
                <div className="modal fade" id="modalRegisterForm" tabIndex="-1" role="dialog" >
                    <div className="modal-dialog" role="document">
                        <div className={"modal-content mx-3 " +style.modal_content}>
                            {/* header */}
                            <div className="modal-header">
                                <h3 className="modal-title">{this.text.register.registerDialog.title}</h3>
                                <button type="button" className={"close "+style.close} data-dismiss="modal">&times;</button>
                            </div>
                            {/* body */}
                            <form>
                            <div className="modal-body">
                                <div className="form-group">
                                    <div className="form-row">
                                    
                                    
                                    {/* Name */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className={"input-group-text "+ style.input_group_text_style}> <i className={"fa fa-user "+style.icon_margin_left}></i> </span>
                                        </div>
                                        <input id="reg_name" className="form-control" placeholder={this.text.register.registerDialog.name} type="text" required></input>
                                    </div>
                                    
                                    {/* Email */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className={"input-group-text "+ style.input_group_text_style}> <i className={"fa fa-envelope "+style.icon_margin_left}></i> </span>
                                        </div>
                                        <input id="reg_email" type="email" className="form-control" placeholder={this.text.register.registerDialog.email} required></input>
                                    </div>

                                    {/* School */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className={"input-group-text "+ style.input_group_text_style}> <i className={"fa fa-building "+style.icon_margin_left}></i> </span>
                                        </div>
                                        <input id="reg_school" className="form-control" placeholder={this.text.register.registerDialog.school} type="text" required></input>
                                    </div>

                                    {/* Study */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className={"input-group-text "+ style.input_group_text_style}> <i className={"fa fa-graduation-cap "+style.icon_margin_left}></i> </span>
                                        </div>
                                        <input id="reg_study" className="form-control" placeholder={this.text.register.registerDialog.study} type="text" required></input>
                                    </div>

                                    {/* T-shirt Size */}
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className={"input-group-text "+ style.input_group_text_style}> <i className={"fa fa-smile-o "+style.icon_margin_left}></i> </span>
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
                                            <span className={"input-group-text "+ style.input_group_text_style}> <i className={"fa fa-cutlery "+style.icon_margin_left}></i> </span>
                                        </div>
                                        <input id="reg_food" className="form-control" placeholder={this.text.register.registerDialog.diet} type="text"></input>
                                    </div>

                                    {/* Team */}
                                    <div className="form-group input-group-checkbox">
                                        <div className="input-group">
                                        <div className="container">
                                            <label className="form-check form-check-inline">
                                                <span className={"input-group-text "+ style.input_group_text_style}> <i className={"fa fa-users "+style.icon_margin_left}></i> </span>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <input id="reg_team" className="form-check-input" type="checkbox"></input>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <label className={"form-control-label "+style.label_aligned} >{this.text.register.registerDialog.team}</label>
                                            </label>
                                            </div>
                                        </div>
                                    </div>

                                    </div>

                                    {/* Email conformation - text*/}
                                    <div>
                                        <small id="emailConformation" className="form-text-inline text-muted">
                                            {this.text.register.registerDialog.emailInfo}
                                        </small>
                                    </div>
                                    
                                </div>
                            </div>
                            </form>
                            
                            {/* footer */}
                            {/* Registration Button  */}
                            <div className="modal-footer modal-guts">
                                <button className={"btn btn-primary btn-block " +style.register_button} type="submit" onClick={this.handleClick}>{this.text.register.registerDialog.registerBtn}</button>
                            </div>                            

                        </div>
                    </div>
                </div>
                {/* End of Registration Modal */}

            </div>
            );
    }
}    

export default ApplyButton;
