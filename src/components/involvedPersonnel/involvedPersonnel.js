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
                    title: "Managing Director, Icelandic Blockchain Foundation",
                    linkedIn: "https://www.linkedin.com/in/kristjanmik/",
                },
                {
                    // Judge
                    name: "Sunna Halla Einarsdóttir",
                    title: "CFO, Icelandic Startup",
                    linkedIn: "https://www.linkedin.com/in/sunna-halla-einarsd%C3%B3ttir-17714a131/",
                },
                {
                    // Judge
                    name: "Auður Örlygsdóttir",
                    title: "Project manager, Höfði Friðarsetur",
                    linkedIn: "https://www.linkedin.com/in/au%C3%B0ur-%C3%B6rlygsd%C3%B3ttir-689314a4/",
                },
                {
                    // Judge
                    name: "Kristinn Jón Ólafsson",
                    title: "Director of Innovation, Reykjavíkurborg",
                    linkedIn: "https://www.linkedin.com/in/kristinnjo/",
                },
            ],
            mentors: [
                {
                    // Mentor
                    name: "Rafnar Ólafsson",
                    title: "Data Engineer",
                    linkedIn: "https://www.linkedin.com/in/rafnar-olafsson/",
                },
                {
                    // Mentor
                    name: "Arnar Þór Sigurðsson",
                    title: "Backend Developer",
                    linkedIn: "http://www.linkedin.com/in/arnar-%C3%BE%C3%B3r-sigur%C3%B0sson-72a744185",
                },
                {
                    // Mentor // Workshop Leader
                    name: "Andrea Gunnarsdóttir",
                    title: "BSc Engineering Management",
                    linkedIn: "https://www.linkedin.com/in/andrea-gunnarsd%C3%B3ttir-3730bb13b/",
                },
                {
                    // Mentor // Workshop Leader
                    name: "Margrét Dóra Ragnarsdóttir",
                    title: "Experience Designer",
                    linkedIn: "https://www.linkedin.com/in/maggadora/",
                },
                {
                    // Mentor // Workshop Leader
                    name: "Rasmus Petersen",
                    title: "Director of Robotics, Íslandsbanki",
                    linkedIn: "https://www.linkedin.com/in/rasmus-petersen-b0612031/",
                },
                {
                    // Mentor // Workshop Leader
                    name: "Scotty Shaw",
                    title: "CEO / Founding President, National Technology Association & Tech Tree Root",
                    linkedIn: "https://www.linkedin.com/in/scottyshaw/",
                },
                // {
                //     // Mentor // Workshop Leader
                //     name: "Rakel Björt Jónsdóttir",
                //     title: "Developer, Kolibri",
                //     linkedIn: "https://www.linkedin.com/in/rakel-bj%C3%B6rt-j%C3%B3nsd%C3%B3ttir/",
                // },
                {
                    // Mentor // Workshop Leader
                    name: "Ósk Heiða Sveinsdóttir",
                    title: "Marketing Director, Íslandspóstur",
                    linkedIn: "https://www.linkedin.com/in/oskheida/",
                },
                {
                    // Mentor // Workshop Leader
                    name: "Anna Signý Guðbjörnsdóttir",
                    title: "UX Researcher, Kolibri",
                    linkedIn: "https://www.linkedin.com/in/annasigny/",
                },
                {
                    // Mentor // Workshop Leader
                    name: "Ólafur Sverrir Kjartansson",
                    title: "Technical Director, Ueno",
                    linkedIn: "https://www.linkedin.com/in/%C3%B3lafur-sverrir-kjartansson-a4a0793/",
                },
                // {
                //     // Team forming leader
                //     name: "Ásthildur Didda Guðmundsdóttir",
                //     title: "Manager at a after school program",
                //     linkedIn: "https://www.linkedin.com/in/%C3%A1sthildur-gu%C3%B0mundsd%C3%B3ttir-8159a11a1/",
                // },
                // {
                //     // Yoga instructor
                //     name: "Kristín Hulda Gísladóttir",
                //     title: "Masters student in clinical psychology and yoga instructor",
                //     linkedIn: "https://www.linkedin.com/in/krist%C3%ADn-hulda-665959193/",
                // },

            ]
        };
    }
    render() {
        return (
            <div className={style.personnel_div+" container"}>
                <PersonnelSection sectionTitle="Judges" personnelList={this.state.judges} />
                <PersonnelSection sectionTitle="Mentors / Workshop Leaders" personnelList={this.state.mentors} />
            </div>
        )
    }
}
  
export default InvolvedPersonnel;