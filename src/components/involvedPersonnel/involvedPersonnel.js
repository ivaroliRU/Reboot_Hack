import React, { Component } from 'react';
import style from "./involvedPersonnel.css";
import Cookies from 'js-cookie';
import PersonnelSection from './personnelSection/personnelSection';


class InvolvedPersonnel extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            judges: [
                {
                    // Judge
                    name: "Kristján Ingi Mikaelsson",
                    titleEn: "Managing Director of the Icelandic Blockchain Foundation",
                    titleIs: "Framkvæmdastjóri, Rafmyntráðið",
                    purpose: "Judge",
                    linkedIn: "https://www.linkedin.com/in/kristjanmik/",
                },
                {
                    // Judge
                    name: "Sunna Halla Einarsdóttir",
                    titleEn: "CFO, Icelandic Startup",
                    titleIs: "Fjármálastjóri, Icelandic Startups ",
                    purpose: "Judge",
                    linkedIn: "https://www.linkedin.com/in/sunna-halla-einarsd%C3%B3ttir-17714a131/",
                },
                {
                    // Judge
                    name: "Auður Örlygsdóttir",
                    titleEn: "Project manager, Höfði Friðarsetur",
                    titleIs: "Verkefnisstjóri, Höfði Friðarsetur",
                    purpose: "Judge",
                    linkedIn: "https://www.linkedin.com/in/au%C3%B0ur-%C3%B6rlygsd%C3%B3ttir-689314a4/",
                },
                {
                    // Judge
                    name: "Kristinn Jón Ólafsson",
                    titleEn: "Director of Innovation, Reykjavíkurborg",
                    titleIs: "Forstöðumaður nýsköpunar innviða, Reykjavíkurborg",
                    purpose: "Judge",
                    linkedIn: "https://www.linkedin.com/in/kristinnjo/",
                },
                {
                    // Judge
                    name: "Ari Kristinn Jónsson",
                    titleEn: "Rector of Rekjavík University",
                    titleIs: "Rektor Háskólans í Reykjavík",
                    purpose: "Judge",
                    linkedIn: "https://www.linkedin.com/in/ari-jonsson/",
                },
            ],
            mentors: [
                {
                    // Mentor
                    name: "Rafnar Ólafsson",
                    titleEn: "Data Engineer",
                    titleIs: "Data Engineer",
                    purpose: "Mentor",
                    linkedIn: "https://www.linkedin.com/in/rafnar-olafsson/",
                },
                {
                    // Mentor
                    name: "Arnar Þór Sigurðsson",
                    titleEn: "Backend Developer",
                    titleIs: "Bakendaforritari",
                    purpose: "Mentor",
                    linkedIn: "http://www.linkedin.com/in/arnar-%C3%BE%C3%B3r-sigur%C3%B0sson-72a744185",
                },
                {
                    // Mentor // Workshop Leader
                    name: "Andrea Gunnarsdóttir",
                    titleEn: "BSc Engineering Management",
                    titleIs: "BSc Rekstrarverkfræði",
                    purpose: "Mentor / Workshop Leader",
                    linkedIn: "https://www.linkedin.com/in/andrea-gunnarsd%C3%B3ttir-3730bb13b/",
                },
                {
                    // Mentor // Workshop Leader
                    name: "Margrét Dóra Ragnarsdóttir",
                    titleEn: "Experience Designer",
                    titleIs: "Stafrænn hönnunarleiðtogi",
                    purpose: "Mentor / Workshop Leader",
                    linkedIn: "https://www.linkedin.com/in/maggadora/",
                },
                {
                    // Mentor // Workshop Leader
                    name: "Rasmus Petersen",
                    titleEn: "Director of Robotics, Íslandsbanki",
                    titleIs: "Director of Robotics, Íslandsbanki",
                    purpose: "Mentor / Workshop Leader",
                    linkedIn: "https://www.linkedin.com/in/rasmus-petersen-b0612031/",
                },
                {
                    // Mentor // Workshop Leader
                    name: "Scotty Shaw",
                    titleEn: "CEO / Founding President, National Technology Association & Tech Tree Root",
                    titleIs: "Forstjóri / Stofnandi",
                    purpose: "Mentor / Workshop Leader",
                    linkedIn: "https://www.linkedin.com/in/scottyshaw/",
                },
                {
                    // Mentor // Workshop Leader
                    name: "Rakel Björt Jónsdóttir",
                    titleEn: "Developer, Kolibri",
                    titleIs: "Forritari, Kolibri",
                    purpose: "Mentor / Workshop Leader",
                    linkedIn: "https://www.linkedin.com/in/rakel-bj%C3%B6rt-j%C3%B3nsd%C3%B3ttir/",
                },
                {
                    // Mentor // Workshop Leader
                    name: "Ósk Heiða Sveinsdóttir",
                    titleEn: "Marketing Director, Íslandspóstur",
                    titleIs: "Markaðsstjóri Íslandspósts",
                    purpose: "Mentor / Workshop Leader",
                    linkedIn: "https://www.linkedin.com/in/oskheida/",
                },
                {
                    // Mentor // Workshop Leader
                    name: "Anna Signý Guðbjörnsdóttir",
                    titleEn: "UX Researcher, Kolibri",
                    titleIs: "UX Researcher, Kolibri",
                    purpose: "Mentor / Workshop Leader",
                    linkedIn: "https://www.linkedin.com/in/annasigny/",
                },
                {
                    // Mentor
                    name: "Matthias Book",
                    titleEn: "Computer Science Department Head, University of Iceland",
                    titleIs: "Deildarformaður tölvunarfræðideildar, Háskóli Íslands",
                    purpose: "Mentor",
                    linkedIn: "https://www.linkedin.com/in/matthiasbook/",
                },
                {
                    // Mentor // Workshop Leader
                    name: "Gregory Smith",
                    titleEn: "CIO, American Kidney Fund",
                    titleIs: "CIO, American Kidney Fund",
                    purpose: "Mentor / Workshop Leader",
                    linkedIn: "https://www.linkedin.com/in/gregoryssmith1/",
                },
                {
                    // Mentor
                    name: "Sara Björk Másdóttir",
                    titleEn: "Co-founder, Reboot Hack",
                    titleIs: "Meðstofnandi, Reboot Hack",
                    purpose: "Mentor",
                    linkedIn: "https://www.linkedin.com/in/sara-mars/",
                }, 
                {
                    // Mentor // Workshop Leader
                    name: "Ólafur Sverrir Kjartansson",
                    titleEn: "Technical Director, Ueno",
                    titleIs: "Technical Director, Ueno",
                    purpose: "Mentor / Workshop Leader",
                    linkedIn: "https://www.linkedin.com/in/%C3%B3lafur-sverrir-kjartansson-a4a0793/",
                },
                {
                    // Mentor // Workshop Leader
                    name: "Svava Björk Ólafsdóttir",
                    titleEn: "Co-founder, Rata",
                    titleIs: "Meðstofnandi, Rata",
                    purpose: "Mentor / Workshop Leader",
                    linkedIn: "https://www.linkedin.com/in/svavaola/",
                },
                {
                    // Team forming leader
                    name: "Ásthildur Didda Guðmundsdóttir",
                    titleEn: "Manager at an after school program",
                    titleIs: "Forstöðumaður frístundaheimilis",
                    purpose: "Team forming leader",
                    linkedIn: "https://www.linkedin.com/in/%C3%A1sthildur-gu%C3%B0mundsd%C3%B3ttir-8159a11a1/",
                },
                {
                    // Yoga instructor
                    name: "Kristín Hulda Gísladóttir",
                    titleEn: "Masters student in clinical psychology and yoga instructor",
                    titleIs: "Meistaranemi í klínískri sálfræði og jógakennari",
                    purpose: "Yoga instructor",
                    linkedIn: "https://www.linkedin.com/in/krist%C3%ADn-hulda-665959193/",
                },

            ]
        };
    }
    render() {
        return (
            <div className={style.personnel_div+" container"}>
                <PersonnelSection sectionTitle="Judges" personnelList={this.state.judges} />
                <div className="container pb-md-4 pl-md-3">
                    <img src="/images/about/Judges+Kristjana.jpg" width="100%"></img>
                </div>
                <PersonnelSection sectionTitle="Mentors / Workshop Leaders" personnelList={this.state.mentors} />
            </div>
        )
    }
}

export default InvolvedPersonnel;