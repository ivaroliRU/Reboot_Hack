import React, { Component } from 'react';
import advisorsStyle from "./boardOfAdvisors.css";
import teamsStyle from "../teams/teams.css";
import teamStyle from "../teams/team/team.css";
import Advisor from "./advisor/advisor";
import Cookies from 'js-cookie';


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
                linkedInLink: 'https://www.linkedin.com/in/andrea-gunnarsd%C3%B3ttir-3730bb13b/',
                photoURL: './images/Board_of_Advisors/Andrea_Gunnarsdóttir.png',
            },
            {
                id: 1,
                name: 'Andri Heiðar Kristinsson',
                titleIs: 'Framkvæmdastjóri, Travelade',
                titleEn: 'CEO and Co-Founder, Travelade',
                email: 'andri@travelade.com',
                linkedInLink: 'https://www.linkedin.com/in/andriheidar/',
                photoURL: './images/Board_of_Advisors/Andri_Heiðar_Kristinsson.jpg',
            },
            {
                id: 2,
                name: 'Ari Kristinn Jónsson',
                titleIs: 'Rektor Háskólans í Reykjavík',
                titleEn: 'Rector of Rekjavík University',
                email: 'ari@ru.is',
                linkedInLink: 'https://www.linkedin.com/in/ari-jonsson/',
                photoURL: null,
            },
            {
                id: 3,
                name: 'Arnheiður Guðmundsdóttir',
                titleIs: 'Framkvæmdastjóri Ský & UTmessunnar',
                titleEn: 'Managing Director, Ský & UTmessan',
                email: 'arnheidur@sky.is',
                linkedInLink: 'https://www.linkedin.com/in/arnheidurgudm/',
                photoURL: './images/Board_of_Advisors/Arnheidur_Gudmundsdottir.png',
            },
            {
                id: 4,
                name: 'Björk Brynjarsdóttir',
                titleIs: 'Teymisþjálfi, Kolibri',
                titleEn: 'Team Coach and facilitator, Kolibri',
                email: 'bjork@kolibri.is',
                linkedInLink: 'https://www.linkedin.com/in/bjorkbrynjars/',
                photoURL: './images/Board_of_Advisors/Björk_Brynjarsdóttir.jpg',
            },
            {
                id: 5,
                name: 'Einar Mäntylä',
                titleIs: 'Framkvæmdastjóri, Auðna-Tæknitorg',
                titleEn: 'CEO, Auðna-Tæknitorg',
                email: 'einarm@hi.is',
                linkedInLink: 'https://www.linkedin.com/in/einar-m%C3%A4ntyl%C3%A4-2362751/',
                photoURL: null,
            },
            {
                id: 6,
                name: 'Fjalar Sigurðarson',
                titleIs: 'Markaðsstjóri, Nýsköpunarmiðstöð Íslands',
                titleEn: 'Director of Marketing, Innovation Center Iceland',
                email: 'fjalar@nmi.is',
                linkedInLink: 'https://www.linkedin.com/in/fjalarsigurdarson/',
                photoURL: './images/Board_of_Advisors/Fjalar_mynd copy.jpg',
            },
            {
                id: 7,
                name: 'Fríða Snædís Jóhannesdóttir',
                titleIs: 'Meðstofnandi, Reboot Hack',
                titleEn: 'Co-founder, Reboot Hack',
                email: null,
                linkedInLink: 'https://www.linkedin.com/in/fridasnaedis/',
                photoURL: null,
            },
            {
                id: 8,
                name: 'Helga Dögg Björgvinsdóttir',
                titleIs: 'Viðskiptastjóri, Men & Mice',
                titleEn: 'Customer Success Manager, Men & Mice',
                email: 'helga@crowberrycapital.com ',
                linkedInLink: 'https://www.linkedin.com/in/helgadogg/',
                photoURL: './images/Board_of_Advisors/Helga_Valfells.jpeg',
            },
            {
                id: 9,
                name: 'Helga Valfells',
                titleIs: 'Stofnandi og framkvæmdastjóri, Crowberry Capital',
                titleEn: 'Founder & Managing Partner, Crowberry Capital',
                email: 'helga@crowberrycapital.com ',
                linkedInLink: 'https://www.linkedin.com/in/helga-valfells-ba85046/',
                photoURL: './images/Board_of_Advisors/Helga_Valfells.jpeg',
            },
            {
                id: 10,
                name: 'Hrund Gunnsteinsdóttir',
                titleIs: 'Framkvæmdastjóri, Festa',
                titleEn: 'Director, Festa',
                email: 'Hrund@samfelagsabyrgd.is ',
                linkedInLink: 'https://www.linkedin.com/in/hrund-gunnsteinsdottir-43b3b32a/',
                photoURL: './images/Board_of_Advisors/Hrund_Gunnsteinsdóttir.jpg',
            },
            {
                id: 11,
                name: 'Dr. Jón Atli Benediktsson',
                titleIs: 'Rektor Háskóla Íslands',
                titleEn: 'Rector of the University of Iceland',
                email: 'rektor@hi.is ',
                linkedInLink: 'https://www.linkedin.com/in/jon-atli-benediktsson-b1b364b/',
                photoURL: './images/Board_of_Advisors/Jón_Atli_Benediktsson.jpg',
            },
            {
                id: 12,
                name: 'Kristinn Árni L. Hróbjartsson',
                titleIs: 'Rekstrarstjóri, Gangverk',
                titleEn: 'Director of Operations,  Gangverk',
                email: 'k@gangverk.is',
                linkedInLink: 'https://www.linkedin.com/in/hrobjartsson/',
                photoURL: null,
            },
            {
                id: 13,
                name: 'Kristján Ingi Mikaelsson',
                titleIs: 'Framkvæmdastjóri, Rafmyntráðið',
                titleEn: 'Managing Director of the Icelandic Blockchain Foundation',
                email: 'kristjanmik@gmail.com ',
                linkedInLink: 'https://www.linkedin.com/in/kristjanmik/',
                photoURL: './images/Board_of_Advisors/Kristján_Ingi_Mikaelsson.jpg',
            },
            {
                id: 14,
                name: 'Kristrún Tinna Gunnarsdóttir',
                titleIs: 'Forstöðumaður stefnumótunar, Íslandsbanki',
                titleEn: 'Executive Director, Strategy, Íslandsbanki',
                email: 'kristrun.tinna.gunnarsdottir@islandsbanki.is',
                linkedInLink: 'https://www.linkedin.com/in/kristrunt/',
                photoURL: './images/Board_of_Advisors/Kristrún_Tinna_Gunnarsdóttir.jpg',
            },
            {
                id: 15,
                name: 'Lydía Ósk Ómarsdóttir',
                titleIs: 'Ráðgjafi, Intellecta',
                titleEn: 'Advisor, Intellecta',
                email: 'lydia@intellecta.is ',
                linkedInLink: 'https://www.linkedin.com/in/lyd%C3%ADa-%C3%B3sk-%C3%B3marsd%C3%B3ttir-8769ab42/',
                photoURL: './images/Board_of_Advisors/Lydía_Ósk_Ómarsdóttir.jpg',
            },
            {
                id: 16,
                name: 'Margrét Dóra Ragnarsdóttir',
                titleIs: 'Stafrænn hönnunarleiðtogi',
                titleEn: 'Experience Designer',
                email: 'maggadora@gmail.com',
                linkedInLink: 'https://www.linkedin.com/in/maggadora/',
                photoURL: './images/Board_of_Advisors/Margrét_Dóra_Ragnarsdóttir.jpg',
            },
            {
                id: 17,
                name: 'Ragnheiður H. Magnúsdóttir',
                titleIs: 'Forstöðumaður framkvæmda, Veitur',
                titleEn: 'Head of Utility Maintenance, Veitur',
                email: 'Ragnheidur.Hrefna.Magnusdottir@veitur.is ',
                linkedInLink: 'https://www.linkedin.com/in/ragnheidur/?originalSubdomain=is',
                photoURL: null,
            },
            {
                id: 18,
                name: 'Ragnhildur Ágústsdóttir',
                titleIs: 'Microsoft / Lava show',
                titleEn: 'Microsoft / Lava show',
                email: 'ragnhildur@eldvirkni.is /ragnhildur.agustsdottir@microsoft.com',
                linkedInLink: 'https://www.linkedin.com/in/ragnhildur/',
                photoURL: null
            },
            {
                id: 19,
                name: 'Salóme Guðmundsdóttir',
                titleIs: 'Framkvæmdastjóri, Icelandic Startups',
                titleEn: 'CEO, Icelandic Startups',
                email: null,
                linkedInLink: 'https://www.linkedin.com/in/salomeg/',
                photoURL: null,
            },
            {
                id: 20,
                name: 'Sara Björk Másdóttir',
                titleIs: 'Meðstofnandi, Reboot Hack',
                titleEn: 'Co-founder, Reboot Hack',
                email: null,
                linkedInLink: 'https://www.linkedin.com/in/sara-mars/',
                photoURL: null,
            },
            {
                id: 21,
                name: 'Sigríður Valgeirsdottir',
                titleIs: 'Sérfræðingur í nýsköpun, Atvinnuvega – og nýsköpunarráðuneytið',
                titleEn: 'Senior expert, Department of tourism and innovation',
                email: 'sigridur.valgeirsdottir@anr.is ',
                linkedInLink: 'https://www.linkedin.com/in/sigridur-valgeirsdottir-15400b11/',
                photoURL: './images/Board_of_Advisors/S_Valgeirsdottir.jpg',
            },
            {
                id: 22,
                name: 'Svafa Grönfeldt',
                titleIs: 'Formaður stjórnar MITdesignX viðskiptahraðalsins, stjórnarmaður: Icelandair, Origo, Össur',
                titleEn: 'Chair MITdesignX, Board of directors: Icelandair, Origo, Össur',
                email: 'svafa@mit.edu',
                linkedInLink: 'https://www.linkedin.com/in/svafa-gronfeldt-77280b35/',
                photoURL: './images/Board_of_Advisors/Svafa_Grönfeldt.jpg',
            },
            {
                id: 23,
                name: 'Védís Hervör Árnadóttir',
                titleIs: 'Samskipta- og miðlunarstjóri, Viðskiptaráð Íslands',
                titleEn: 'Director of Communications and Multimedia, Iceland Chamber of Commerce',
                email: 'vedis@vi.is',
                linkedInLink: 'https://www.linkedin.com/in/vedis-hervor-arnadottir-65615710/',
                photoURL: './images/Board_of_Advisors/Vedis_Hervor_Arnadottir.jpg',
            },
            {
                id: 24,
                name: 'Þórey Vilhjálmsdóttir',
                titleIs: 'Ráðgjafi, Capacent',
                titleEn: 'Director, Capacent',
                email: 'thorey.vilhjalmsdottir@capacent.is ',
                linkedInLink: 'https://www.linkedin.com/in/thoreyvilhjalmsdottir/',
                photoURL: './images/Board_of_Advisors/Þórey_Vilhjálmsdóttir.jpg',
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
                key={advisor.id}
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
            <h1 className={teamsStyle.the_team_text}>{titleText}</h1>
            <div className={"text-center"}>
                <div className={"container"}>
                    <div className={teamStyle.team_div}>
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