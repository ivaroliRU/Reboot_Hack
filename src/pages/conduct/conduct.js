import React, { Component } from 'react';
import { render } from 'react-dom';
import { changeLanguage } from '../../translations';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import style from './conduct.css'




class App extends Component {
    constructor(props) {
        super(props)

        this.handler = this.handler.bind(this)
    }

    handler() {
        changeLanguage();
        this.forceUpdate();
    }
    

    render() {
        return (
        <div className={style.App}>    
            <Navbar handler = {this.handler}/>  

            <div className="container">

            <h2 className={style2.center_align+ "pl-2" +style2.padding_top}>Code of Conduct</h2>

            <p>Reboot Hack is dedicated to providing an enjoyable and a harassment-free conference experience
                for everyone, regardless of gender, gender identity and expression, sexual orientation, disability,
                physical appearance, body size, race, age or religion. We expect all of our attendees, sponsors,
                volunteers and staff to be respectful and considerate of others.
            </p>

            <p>
                We do not, under any circumstances, tolerate harassment of conference participants in any form.
                Conference participants violating these rules may be sanctioned or expelled from Reboot Hack at
                the discretion of the conference organizers. Our anti-harassment policy and information on how
                to report follows:
            </p>

            <h4><b><u>Anti-Harassment Policy.</u></b></h4>
            <p>Harassment includes, but is not limited to:</p>

            <ul>
                <li>
                    Verbal comments that reinforce social structures of domination related to gender, gender
                    identity and expression, sexual orientation, disability, physical appearance, body size,
                    race, age or religion.
                </li>
                    
                <li>
                    Sexual images in public spaces
                </li>

                <li>
                    Violence
                </li>
                
                <li>
                   Deliberate intimidation, stalking, or following
                </li>
                    
                <li>
                    Harassing photography or recording
                </li>

                <li>
                    Sustained disruption of talks or other events
                </li>

                <li>
                    Inappropriate physical contact or gestures
                </li>    

                <li>
                    Unwelcome sexual attention
                </li>
                
                <li>
                    Advocating for, or encouraging, any of the above behavior
                </li>
            </ul>

            <p>
                Event organizers will make sure that everyone adheres to the code. They may take action to
                redress anything designed to, or with the clear impact of, disrupting the event or making the
                environment hostile for any participants. We expect participants to follow these rules at all event
                venues and event-related social activities.
            </p>

            <h4><b><u>Reporting</u></b></h4>

            <p>
                If someone makes you or anyone else feel unsafe or unwelcome, please report it as soon as
                possible. <b>Reboot Hack management team can be identified by black hoodies with the
                Reboot Hack logo.</b> Harassment and other code of conduct violations reduce the value of our
                event for everyone. We want you to be happy at our event. People like you make our event a
                better place. A report can be made either personally or anonymously
            </p>

            <h6><b>Anonymous Report</b></h6>

            <p>
                You can make an anonymous report here <a href="https://docs.google.com/forms/d/1szAObodE8do4MA_crhvlHnlXH2ryHnKsDs-_OFFz228/viewform?edit_requested=true">[Anonymoys Report]</a>. We can't follow up an
                anonymous report with you directly, but we will fully investigate it and take whatever
                action is necessary to prevent a recurrence.
            </p>

            <h6><b>Personal Report</b></h6>
            <p>You can make a personal report by:</p>
                <ul>
                    <li>
                        <b>
                        Calling or messaging this phone number: +354 858 7862 (Kristjana Björk) or
                        + 354 662 6919 (Stefán Örn). These phone numbers will be continuously
                        monitored for the duration of the event.
                        </b>
                    </li>

                    <li>
                        Contacting Reboot Hack management team, identified by black Reboot Hack hoodies.
                    </li>
                </ul>

                <p>
                    When taking a personal report, our staff will ensure you are safe and cannot be
                    overheard. They may involve other event staff to ensure your report is managed properly.
                    Once safe, we'll ask you to tell us about what happened. This can be upsetting, but we'll
                    handle it as respectfully as possible, and you can bring someone to support you. You
                    won't be asked to confront anyone and we won't tell anyone who you are.
                    Our team will be happy to help you contact hotel/venue security, local law enforcement,
                    local support services, provide escorts, or otherwise assist you to feel safe for the duration
                    of the event. We value your attendance.
                </p>
                
                <p>
                    Reboot Hack reserves the right to revise, make exceptions to, or otherwise amend these policies
                    in whole or in part. If you have any questions regarding these policies, please contact Reboot
                    Hack by e-mail: kristjana@reboothack.is or stefan@reboothack.is or phone
                </p>

                <small>This document was last updated on January 15th 2020</small>
            </div>

            <Footer />
        </div>
        );
    }
}

render(<App/>, document.getElementById('root'));