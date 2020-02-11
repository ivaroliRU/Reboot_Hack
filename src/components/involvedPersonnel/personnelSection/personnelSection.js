import React, { Component } from 'react';
import style from "../involvedPersonnel.css";
import Cookies from 'js-cookie';

class PersonnelSection extends Component {
    
    constructor(props) {
        super(props);
    }
    render() {

        let personnelSection = this.props.personnelList.map(
            (person) => {
              return (
                <div 
                    key={person.linkedIn}
                    className={"col-6 col-lg-3 "+style.margin_auto+' '+style.padding_bottom}>
                    <h4 className={style.reboot_color+" "+style.heading}><b>{person.name}</b></h4>
                    <h5 className={style.reboot_color}>{person.title}</h5>
                    {
                    person.linkedIn == null ? 
                    null 
                    :
                    <a
                        className={style.linkedIn}
                        href={person.linkedIn}
                        target="_blank">
                            <i className={"fa fa-linkedin-square fa-lg"}></i>
                    </a>
                }
                </div>
              );
          });

        return (
            <div className={"container"}>
                <h1 className={style.title_padding_bottom}>{this.props.sectionTitle}</h1>
                <div className={"row"}>
                    {personnelSection}
                </div>
            </div>
        );
    }
}

export default PersonnelSection;