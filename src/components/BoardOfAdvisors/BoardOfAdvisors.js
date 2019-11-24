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
                titleIs: 'BSc Rekstrarverkfræði',
                titleEn: 'BSc Engineering Management',
                email: 'gunnarsdottirandrea@gmail.com',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Andrea_Gunnarsdóttir.png',
                checked: true            
            },
            {
                id: 1,
                name: 'Arnheiður Guðmundsdóttir',
                titleIs: 'Framkvæmdastjóri Ský og UTmessunnar',
                titleEn: 'Managing Director of Ský and UTmessan',
                email: 'arnheidur@sky.is',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Arnheidur_Gudmundsdottir.png',
                checked: true
            },
            /*{
                id: 2,
                name: 'Einar Mäntylä',
                titleIs: null,
                titleEn: null,
                email: 'einarm@hi.is',
                linkedInLink: null,
                photoURL: null,
                checked: true
            },*/
            {
                id: 3,
                name: 'Fjalar Sigurðarson',
                titleIs: 'Markaðsstjóri Nýsköpunarmiðstöðvar Íslands',
                titleEn: 'Director of Marketing at Innovation Center Iceland',
                email: 'fjalar@nmi.is',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Fjalar_mynd copy.jpg',
                checked: true
            },
            {
                id: 4,
                name: 'Helga Valfells',
                titleIs: 'Stofnand og Framkvæmdastjóri Crowberry Capital',
                titleEn: 'Founder and Managing Partner Crowberry Capital',
                email: 'helga@crowberrycapital.com ',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Helga_Valfells.jpeg',
                checked: true
            },
            {
                id: 5,
                name: 'Dr. Jón Atli Benediktsson',
                titleIs: 'Rektor Háskóla Íslands',
                titleEn: 'Rektor of the Universitiy of Iceland',
                email: 'rektor@hi.is ',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Jón_Atli_Benediktsson.jpg',
                checked: true
            },
            /*{
                id: 6,
                name: 'Kristinn Árni L. Hróbjartsson',
                titleIs: 'Rekstrarstjóri Gangverk',
                titleEn: 'Director of Operations at Gangverk',
                email: 'k@gangverk.is',
                linkedInLink: null,
                photoURL: null,
                checked: true
            },*/
            {
                id: 7,
                name: 'Kristján Ingi Mikaelsson',
                titleIs: 'Framkvæmdastjóri Rafmyntaráðs',
                titleEn: 'Managing Director of the Icelandic Blockchain Foundation',
                email: 'kristjanmik@gmail.com ',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Kristján_Ingi_Mikaelsson.jpg',
                checked: true
            },
            {
                id: 8,
                name: 'Lydía Ósk Ómarsdóttir',
                titleIs: 'Ráðgjafi hjá Intellecta',
                titleEn: 'Advisor at Intellecta',
                email: 'lydia@intellecta.is ',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Lydía_Ósk_Ómarsdóttir.jpg',
                checked: true
            },
            /*{
                id: 9,
                name: 'Ragnhildur Ágústsdóttir',
                titleIs: 'Microsoft / Lava show',
                titleEn: 'Microsoft / Lava show',
                email: 'ragnhildur@eldvirkni.is /ragnhildur.agustsdottir@microsoft.com',
                linkedInLink: null,
                photoURL: null
            },*/
           {
                id: 10,
                name: 'Sigríður Valgeirsdottir',
                titleIs: 'Sérfræðingur í nýsköpun hjá atvinnuvega – og nýsköpunarráðuneytinu',
                titleEn: 'senior expert, department of tourism and innovation',
                email: 'sigridur.valgeirsdottir@anr.is ',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/S_Valgeirsdottir.jpg',
                checked: true
            },
            {
                id: 11,
                name: 'Védís Hervör Árnadóttir',
                titleIs: 'Tónlistarkona//Mann- og viðskiptafræðingur MBA / Samskipta- og miðlunarstjóri Viðskiptaráðs Íslands',
                titleEn: 'Tónlistarkona//Mann- og viðskiptafræðingur MBA / Samskipta- og miðlunarstjóri Viðskiptaráðs Íslands',
                email: 'vedis@vi.is',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Vedis_Hervor_Arnadottir.jpg',
                checked: true
            },
            {
                id: 12,
                name: 'Þórey Vilhjálmsdóttir',
                titleIs: 'Forstjóri Capacent',
                titleEn: 'Director of Capacent',
                email: 'thorey.vilhjalmsdottir@capacent.is ',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Þórey_Vilhjálmsdóttir.jpg',
                checked: true
            },
            {
                id: 13,
                name: 'Margrét Dóra Ragnarsdóttir',
                titleIs: 'Stafrænn hönnunarleiðtogi',
                titleEn: 'Stafrænn hönnunarleiðtogi',
                email: 'maggadora@gmail.com',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Margrét_Dóra_Ragnarsdóttir.jpg',
                checked: true
            },
            /*{
                id: 14,
                name: 'Ari Kristinn Jónsson',
                titleIs: 'Rektor of Rekjavík University',
                titleEn: 'Rektor of Rekjavík University',
                email: 'ari@ru.is',
                linkedInLink: null,
                photoURL: null,
                checked: true
            },*/
            {
                id: 15,
                name: 'Kristrún Tinna Gunnarsdóttir',
                titleIs: 'Forstöðumaður stefnumótunar, Íslandsbanki',
                titleEn: 'Executive Director, Strategy, Íslandsbanki',
                email: 'kristrun.tinna.gunnarsdottir@islandsbanki.is',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Kristrún_Tinna_Gunnarsdóttir.jpg',
                checked: true
            },
            {
                id: 16,
                name: 'Hrund Gunnsteinsdóttir',
                titleIs: 'Framkvæmdastjóri Festu - miðstöð um samfélagsábyrgð',
                titleEn: 'Director of Festa - center for social responsibility',
                email: 'Hrund@samfelagsabyrgd.is ',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Hrund_Gunnsteinsdóttir.jpg',
                checked: true
            },
            /*{
                id: 17,
                name: 'Ragnheiður H. Magnúsdóttir',
                titleIs: 'Veitur',
                titleEn: 'Veitur',
                email: 'Ragnheidur.Hrefna.Magnusdottir@veitur.is ',
                linkedInLink: null,
                photoURL: null,
                checked: true
            },*/
            {
                id: 18,
                name: 'Andrei Heiðar Kristinsson',
                titleIs: 'Framkvæmdastjóri Travelade',
                titleEn: 'CEO and Co-Founder, Travelade',
                email: 'andri@travelade.com',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Andri_Heiðar_Kristinsson.jpg',
                checked: true
            },
            {
                id: 19,
                name: 'Svafa Grönfeldt',
                titleIs: 'Formaður stjórnar MITdesignX viðskiptahraðalsins, stjórnarmaður: Icelandair, Origo, Össur',
                titleEn: 'Chair MITdesignX, Board of directors: celandair, Origo, Össur',
                email: 'svafa@mit.edu',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Svafa_Grönfeldt.jpg',
                checked: true
            },
            {
                id: 20,
                name: 'Björk Brynjarsdóttir',
                titleIs: ' Teymisþjálfi, Kolibri',
                titleEn: 'Team Coach and facilitator at Kolibri',
                email: 'bjork@kolibri.is',
                linkedInLink: null,
                photoURL: './images/Board_of_Advisors/Björk_Brynjarsdóttir.jpg',
                checked: true
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
                individualLinkedIn = {advisor.linkedInLink}
                individualEmail = {advisor.email}
                individualPhotoUrl = {advisor.photoURL}
                individualTitleIs = {advisor.titleIs}
                individualTitleEn = {advisor.titleEn}
          />
        );
    });

    return (
        <div>
            <h1 className={TeamsStyle.TheTeamText}>The Board of advisors:</h1>
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