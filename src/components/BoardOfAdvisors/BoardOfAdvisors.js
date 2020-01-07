import React, { Component } from 'react';
import AdvisorsStyle from "./BoardOfAdvisors.css";
import TeamsStyle from "../Teams/Teams.css";
import TeamStyle from "../Teams/Team/Team.css";
import Advisor from "./Advisor/Advisor";
import Cookies from 'js-cookie';


class BoardOfAdvisors extends Component {
    
constructor(props) {
    super(props);
    this.state = {
        advisors: [
            {
                id: 21,
                name: 'Sara Björk Másdóttir',
                titleIs: 'Meðstofnandi, Reboot Hack',
                titleEn: 'Co-founder, Reboot Hack',
                email: null,
                linkedInLink: null,
                photoURL: null,
            },
            {
                id: 22,
                name: 'Fríða Snædís Jóhannesdóttir',
                titleIs: 'Meðstofnandi, Reboot Hack',
                titleEn: 'Co-founder, Reboot Hack',
                email: null,
                linkedInLink: null,
                photoURL: null,
            },
            {
                id: 0,
                name: 'Andrea Gunnarsdóttir',
                titleIs: 'BSc Rekstrarverkfræði',
                titleEn: 'BSc Engineering Management',
                email: 'gunnarsdottirandrea@gmail.com',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Andrea_Gunnarsdóttir.png',
            },
            {
                id: 1,
                name: 'Arnheiður Guðmundsdóttir',
                titleIs: 'Framkvæmdastjóri Ský & UTmessunnar',
                titleEn: 'Managing Director, Ský & UTmessan',
                email: 'arnheidur@sky.is',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Arnheidur_Gudmundsdottir.png',
            },
            {
                id: 2,
                name: 'Einar Mäntylä',
                titleIs: 'Framkvæmdastjóri, Auðna-Tæknitorg',
                titleEn: 'CEO, Auðna-Tæknitorg',
                email: 'einarm@hi.is',
                linkedInLink: null,
                photoURL: null,
            },
            {
                id: 3,
                name: 'Fjalar Sigurðarson',
                titleIs: 'Markaðsstjóri, Nýsköpunarmiðstöð Íslands',
                titleEn: 'Director of Marketing, Innovation Center Iceland',
                email: 'fjalar@nmi.is',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Fjalar_mynd copy.jpg',
            },
            {
                id: 4,
                name: 'Helga Valfells',
                titleIs: 'Stofnandi og framkvæmdastjóri, Crowberry Capital',
                titleEn: 'Founder & Managing Partner, Crowberry Capital',
                email: 'helga@crowberrycapital.com ',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Helga_Valfells.jpeg',
            },
            {
                id: 5,
                name: 'Dr. Jón Atli Benediktsson',
                titleIs: 'Rektor Háskóla Íslands',
                titleEn: 'Rector of the University of Iceland',
                email: 'rektor@hi.is ',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Jón_Atli_Benediktsson.jpg',
            },
            {
                id: 6,
                name: 'Kristinn Árni L. Hróbjartsson',
                titleIs: 'Rekstrarstjóri, Gangverk',
                titleEn: 'Director of Operations at Gangverk',
                email: 'k@gangverk.is',
                linkedInLink: null,
                photoURL: null,
            },
            {
                id: 7,
                name: 'Kristján Ingi Mikaelsson',
                titleIs: 'Framkvæmdastjóri, Rafmyntráðið',
                titleEn: 'Managing Director of the Icelandic Blockchain Foundation',
                email: 'kristjanmik@gmail.com ',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Kristján_Ingi_Mikaelsson.jpg',
            },
            {
                id: 8,
                name: 'Lydía Ósk Ómarsdóttir',
                titleIs: 'Ráðgjafi, Intellecta',
                titleEn: 'Advisor, Intellecta',
                email: 'lydia@intellecta.is ',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Lydía_Ósk_Ómarsdóttir.jpg',
            },
            {
                id: 9,
                name: 'Ragnhildur Ágústsdóttir',
                titleIs: 'Microsoft / Lava show',
                titleEn: 'Microsoft / Lava show',
                email: 'ragnhildur@eldvirkni.is /ragnhildur.agustsdottir@microsoft.com',
                linkedInLink: null,
                photoURL: null
            },
           {
                id: 10,
                name: 'Sigríður Valgeirsdottir',
                titleIs: 'Sérfræðingur í nýsköpun, Atvinnuvega – og nýsköpunarráðuneytið',
                titleEn: 'Senior expert, Department of tourism and innovation',
                email: 'sigridur.valgeirsdottir@anr.is ',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/S_Valgeirsdottir.jpg',
            },
            {
                id: 11,
                name: 'Védís Hervör Árnadóttir',
                titleIs: 'Samskipta- og miðlunarstjóri, Viðskiptaráð Íslands',
                titleEn: 'Director of Communications and Multimedia, Iceland Chamber of Commerce',
                email: 'vedis@vi.is',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Vedis_Hervor_Arnadottir.jpg',
            },
            {
                id: 12,
                name: 'Þórey Vilhjálmsdóttir',
                titleIs: 'Ráðgjafi, Capacent',
                titleEn: 'Director, Capacent',
                email: 'thorey.vilhjalmsdottir@capacent.is ',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Þórey_Vilhjálmsdóttir.jpg',
            },
            {
                id: 13,
                name: 'Margrét Dóra Ragnarsdóttir',
                titleIs: 'Stafrænn hönnunarleiðtogi',
                titleEn: 'Experience Designer',
                email: 'maggadora@gmail.com',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Margrét_Dóra_Ragnarsdóttir.jpg',
            },
            {
                id: 14,
                name: 'Ari Kristinn Jónsson',
                titleIs: 'Rektor Háskólans í Reykjavík',
                titleEn: 'Rector of Rekjavík University',
                email: 'ari@ru.is',
                linkedInLink: null,
                photoURL: null,
            },
            {
                id: 15,
                name: 'Kristrún Tinna Gunnarsdóttir',
                titleIs: 'Forstöðumaður stefnumótunar, Íslandsbanki',
                titleEn: 'Executive Director, Strategy, Íslandsbanki',
                email: 'kristrun.tinna.gunnarsdottir@islandsbanki.is',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Kristrún_Tinna_Gunnarsdóttir.jpg',
            },
            {
                id: 16,
                name: 'Hrund Gunnsteinsdóttir',
                titleIs: 'Framkvæmdastjóri, Festa',
                titleEn: 'Director, Festa',
                email: 'Hrund@samfelagsabyrgd.is ',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Hrund_Gunnsteinsdóttir.jpg',
            },
            {
                id: 17,
                name: 'Ragnheiður H. Magnúsdóttir',
                titleIs: 'Forstöðumaður framkvæmda, Veitur',
                titleEn: 'Head of Utility Maintenance, Veitur',
                email: 'Ragnheidur.Hrefna.Magnusdottir@veitur.is ',
                linkedInLink: null,
                photoURL: null,
            },
            {
                id: 18,
                name: 'Andri Heiðar Kristinsson',
                titleIs: 'Framkvæmdastjóri, Travelade',
                titleEn: 'CEO and Co-Founder, Travelade',
                email: 'andri@travelade.com',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Andri_Heiðar_Kristinsson.jpg',
            },
            {
                id: 19,
                name: 'Svafa Grönfeldt',
                titleIs: 'Formaður stjórnar MITdesignX viðskiptahraðalsins, stjórnarmaður: Icelandair, Origo, Össur',
                titleEn: 'Chair MITdesignX, Board of directors: Icelandair, Origo, Össur',
                email: 'svafa@mit.edu',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Svafa_Grönfeldt.jpg',
            },
            {
                id: 20,
                name: 'Björk Brynjarsdóttir',
                titleIs: 'Teymisþjálfi, Kolibri',
                titleEn: 'Team Coach and facilitator, Kolibri',
                email: 'bjork@kolibri.is',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Björk_Brynjarsdóttir.jpg',
            },
        ]
        
    };
    }

  render() {
    var titleText;
    var advisorsSection = this.state.advisors.map(
      (advisor) => {
        return (
            <Advisor
                individualName={advisor.name}
                individualLinkedIn = {advisor.linkedInLink}
                individualEmail = {advisor.email}
                individualPhotoUrl = {advisor.photoURL}
                individualTitleIs = {advisor.titleIs}
                individualTitleEn = {advisor.titleEn}
          />
        );
    });
    if(Cookies.get('language')=='is'){
        titleText="Ráðgjafanefnd";
    }
    else{
        titleText="The Board of Advisors";
    }

    return (
        <div>
            <h1 className={TeamsStyle.TheTeamText}>{titleText}</h1>
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