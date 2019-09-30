import React, { Component } from 'react';
import AdvisorsStyle from "./BoardOfAdvisors.css";
import TeamsStyle from "../Teams/Teams.css";
import TeamStyle from "../Teams/Team/Team.css";
import Advisor from "./Advisor/Advisor";

class BoardOfAdvisors extends Component {
    
constructor(props) {
    super(props);
    this.state = {
        advisors: [
            {
                id: 0,
                name: 'Andrea Gunnarsdóttir',
                company: 'Gullegið, UAK',
                email: 'gunnarsdottirandrea@gmail.com',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 1,
                name: 'Arnheiður Guðmundsdóttir',
                company: 'Ský/UTmessan',
                email: 'arnheidur@sky.is',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 2,
                name: 'Einar Mäntylä',
                company: 'Auðna',
                email: 'einarm@hi.is',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 3,
                name: 'Fjalar Sigurðarson',
                company: 'Nýsköpunarmiðstöð',
                email: 'fjalar@nmi.is',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 4,
                name: 'Helga Valfells',
                company: 'Crowberry',
                email: 'helga@crowberrycapital.com',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 5,
                name: 'Jón Atli Benediktsson',
                company: 'HÍ',
                email: 'rektor@hi.is',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 6,
                name: 'Kristinn Árni L. Hróbjartsson',
                company: 'Gangverk/north stack',
                email: 'k@gangverk.is',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 7,
                name: 'Kristján Ingi Mikaelsson',
                company: 'Rafmyntaráðið',
                email: 'kristjanmik@gmail.com',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 8,
                name: 'Lydía Ósk Ómarsdóttir',
                company: 'Intellecta',
                email: 'lydia@intellecta.is',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 9,
                name: 'Ragnhildur Ágústsdóttir',
                company: 'Microsoft / Lava show',
                email: 'ragnhildur.agustsdottir@microsoft.com',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 10,
                name: 'Sigríður Valgeirsdottir',
                company: 'Nýsköpunarráðuneyti',
                email: 'sigridur.valgeirsdottir@anr.is',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 11,
                name: 'Védís Hervör Árnadóttir',
                company: 'Viðskiptaráð',
                email: 'vedis@vi.is',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 12,
                name: 'Þórey Vilhjálmsdóttir',
                company: 'Capacent',
                email: 'thorey.vilhjalmsdottir@capacent.is',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 13,
                name: 'Margrét Dóra Ragnarsdóttir',
                company: 'síminn, ozz, madpow, MIT',
                email: 'maggadora@gmail.com',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 14,
                name: 'Ari Kristinn Jónsson',
                company: 'Reykjavík Univercity',
                email: '',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 15,
                name: 'Kristrún Tinna Gunnarsdóttir',
                company: 'Forstöðurmaður hjá Íslandsbanka',
                email: '',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 16,
                name: 'Hrund Gunnsteinsdóttir',
                company: 'Festa',
                email: '',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 17,
                name: 'Ragnheiður H. Magnúsdóttir',
                company: 'Veitur',
                email: '',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 18,
                name: 'Andri',
                company: 'Travelade ',
                email: '',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },
            {
                id: 19,
                name: 'Svafa Grönfeldt',
                company: 'MIT',
                email: '',
                linkedInLink: 'https://www.linkedin.com/',
                photoURL: './images/Profile.jpg'
            },

        ]
        
    };
    }

  render() {
    var advisorsSection = this.state.advisors.map(
      (advisor) => {
        return (
            <Advisor
                individualName={advisor.name}
                individualCompany = {advisor.company}
                individualLinkedIn = {advisor.linkedInLink}
                individualEmail = {advisor.email}
                individualPhotoUrl = {advisor.photoURL}
          />
        );
    });

    return (
        <div>
            <h1 className={TeamsStyle.Glow}>The Board of advisors:</h1>
            <div className={"text-center"}>
                <div className={"container"}>
                    <div className={TeamStyle.TeamDiv}>
                        <div className={"container"}>
                            <div className={"row"}>
                                {advisorsSection}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
    }
  }
  
  export default BoardOfAdvisors;