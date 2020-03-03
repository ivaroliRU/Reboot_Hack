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
            extraText = 'Reboot Hack, fyrsta háskólanemadrifna hakkaþonið á Íslandi fór fram í annað sinn helgina 14-16 febrúar í Öskju. Um 100 háskólanemendur hvaðanæfa úr heiminum tóku þátt í að leysa áskoranir fyrirtækja. Í ár komu 12 háskólanemendur úr Háskóla Íslands, Háskólanum í Reykjavík og Listaháskóla Íslands að skipulagningunni.<br /> Þeir samstarfsaðilar sem lögðu fram áskorun voru Auður, Origo, KPMG, Vörður, AwareGo, Listaháskóli Íslands, Byggðastofnun og Ölgerðin.<br /> Þátttakendur í samráði við fyrirtæki unnu að lausnum alla helgina ásamt því að mæta á vinnustofur þar sem allt frá markaðssetningu og verkefnastjórnunnar til “low-coding” og appforritun var kennt.<br /> Dagskráin um helgina gekk vel fyrir sig en margir ólíkir aðilar komu að viðburðinum en þar má nefna mentora, starfsmenn fyrirtækja, sjálfboðaliða, dómara og aðra velunnara.<br /> Í framhaldi af því að öll 24 liðin sem tóku þátt kynntu lausnir sínar á sunnudeginum fyrir fyrirtækjum og dómnefnd voru top fimm lið valin til þess að kynna lausnir sínar fyrir viðstöddum en þau voru:<br /> -Kast<br /> -Krúna<br /> -Auðtré<br /> -Carbon Calc<br /> -Sett<br /> Verkefnið Krúna var valin lausn fólksins en lausnin Auðtré voru sigurvegarar Reboot Hack 2020. Auðtré gengur út á að brjóta niður sparnaðarmarkmið í smærri einingar þar sem notandinn er verðlaunaður með því að fá gróðursett tré í sínu nafni á þriggja mánaða fresti, nái hann markmiði sínu.<br /> Við viljum óska öllum þeim sem tóku þátt innilega til hamingju með árangurinn. Við viljum sömuleiðis þekka sérstaklega þeim sjálfboðaliðum sem komu að viðburðinum en án þeirra hefði viðburðurinn aldrei gengið upp.<br /> Við í verkefnastjórninni erum í skýjunum yfir árangri helgarinnar og munum vinna að því á næstu dögum að tengja teymin við fyrirtækin og koma fleiri myndum og upplýsingum um niðurstöður keppninnar á samfélagsmiðla.';
        }
        else{
            extraText = "Reboot Hack, the first student driven hackathon in Iceland took place over the weekend of 14th-16th of Februar in Askja. 100 students from all over tha world particiapated and tried to come up with solutions to the challenges. This year the project manangement group was made up from 12 students from University of Iceland, Reykjavík University and the Iceland University of Arts.<br /> The partners who made challenges this year where Auður, Origo, KPMG, Vörður, AwareGo, Listaháskóli Íslands, Byggðastofnun og Ölgerðin.<br /> Particiapants worked on solutions over the weekend, alongside attending workshops for marketing, project management, \"low coding\" , app programming and many more.<br /> The schedule over the weeknd went well, but a lot of different people helped making Reboot Hack this year, mentors, representives from companies, volunteers, judges and many others.<br /> All 24 teams presented their solutions for companies and judges on the Sunday. Top 5 teams where chosen to present their solution again, those 5 teams where:<br /> -Kast<br /> -Krúna<br /> -Auðtré<br /> -Carbon Calc<br /> -Sett<br />. Krúna was selected as the peoples choice solution but Auðtré are the Reboot Hack 2020 winners. Auðtré works to split your savings down to smaller goals where the user gets awards by having tree planted in his name every three months, if he gets his savings goal.<br /> We want to wish everyone who participated congratulations on the results. We also want to specially thank all of the volunteers that helped with the event, without them we could not have done it.<br /> We in the project management group are so happy on how the event was and will now work on to connect each team to the companies. We will also uploads photos and more information to our social media.  ";
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
                    <p dangerouslySetInnerHTML={{__html: extraText}} />
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
