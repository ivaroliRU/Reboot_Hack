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
                        <div className="modal-body mx-3">
                            {/* header */}
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h3 className="modal-title">{this.text.register.registerDialog.title}</h3>
                            </div>
                            {/* body */}
                            <div className="modal-body">
                                <div className="form-group">
                                    
                                    <div className="md-from-group m-4">
                                        <input type="name" className="form-control" placeholder="Name" />
                                    </div>
                                    
                                    <div className="md-form-group">
                                        
                                        <input type="email" className="form-control" placeholder="Email" />                                       
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