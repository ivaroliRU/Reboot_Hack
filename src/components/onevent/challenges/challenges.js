import React, { Component } from 'react';
import style from './challenges.css';
import generalStyle from '../onevent.css';
import Cookies from 'js-cookie';
import buttonStyle from '../../applyButton/applyButton.css';

class Challenges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges:[ 
        {
          id: 1,
          titleEn: "Boosting employee happiness with technology",
          titleIs: "Hvernig aukum við starfsánægju með tækni?",
          textEn: "Employee satisfaction can be measured in countless ways and can often be highly dependent on the employee. Some might prefer a relaxed work environment while others strive for maximum productivity and time management. Some jobs have strict restrictions – Truck drivers must make their deliveries on time and must be alert at the wheel; students must complete tasks like achieving a minimum passing grade, write a thesis and defend it. How can we leverage technology to increase job satisfaction?",
          textIs: "Það eru ótal leiðir til að mæla starfsánægju og getur það verið mismunandi milli einstaklinga hvað telst til starfsánægju. Sumir myndu e.t.v. vinna í rólegu vinnuumhverfi á meðan aðrir sækjast frekar í að hámarka framleiðni og besta tímastjórnun. Sum störf hafa strangar kröfur – sendibílstjórar verða að komast á áfangastað og þurfa að vera vakandi við stýrið; nemendur verða að ná ákveðnum áföngum eins og að ná lágmarkseinkun, skrifa lokaritgerð og verja hana. Hvernig getum við aukið starfsánægju með tækni?",
          company: "Origo",
          companyPhotoURL: "/images/sponsors/reboot/OrigoSVG.svg",
          detailsPhotoURL: null
        },
        {
          id: 4,
          titleEn: "How will insurance services look like in the future?",
          titleIs: "Hvernig verður tryggingarþjónusta í framtíðinni?",
          textEn: "Insurance provides the peace of mind knowing that if something happens you are covered. Evolution into the digital world is happening fast and the financial sector is already on its way automating services for the benefit of the customer. The evolution of it is still in progress but what do you see happening?    How do we meet the customer needs on their terms and through the medium they choose when claims happens or when buying insurance?   How do we make sure our customers have the right level of coverage at the right price?",
          textIs: "Tryggingar snúast um að veita fólki þá hugarró sem felst í að vita að ef eitthvað kemur upp á þá ertu tryggður. Stafræn þróun er hröð og áhrifa er þegar farið að gæta hjá fjármálafyrirtækjum sem eru í auknum mæli farin að sjálfvirknivæða þjónustu. Það sér ekki fyrir endann á þeirri þróun en hvað sjáið þið?    Hvernig mætum við þörfum viðskiptavina á þeirra forsendum og í gegnum þá miðla sem þeir kjósa þegar kemur að tjóni eða kaupum á tryggingum?    Hvernig tryggjum við að viðskiptavinir okkar séu rétt tryggðir og rétt verðlagðir?",
          company: "Vörður",
          companyPhotoURL: "/images/sponsors/restart/VordurLogoGraySVG.svg",
          detailsPhotoURL: null
        },
        {
          id: 0,
          titleEn: "Jobs without specified location",
          titleIs: "Störf án staðsetningar",
          textEn: "To Be Announced",
          textIs: "Verður Tilkynnt Síðar",
          company: "Byggðastofnun",
          companyPhotoURL: "/images/sponsors/restart/Byggst_1800x600px_transp.png",
          detailsPhotoURL: null
        },
       
        {
          id: 2,
          titleEn: "Gamification of Savings",
          titleIs: "Leikjavæðing sparnaðar",
          textEn: "Saving is something we all need to focus on, but we may find it difficult as it is often much easier to spend than save. It can be a challenge to find the will power to continue the habit of saving especially when you are on a budget.  How can the elements of gaming like challenges and competition be used to gamify savings and encourage individuals to achieve their savings goals and make it fun at the same time.",
          textIs: "Að leggja fyrir og spara er eitthvað sem við þurfum öll að temja okkur en það getur reynst erfitt því það er oft auðveldara að eyða en spara. Það getur verið áskorun að viðhalda þeirri venju að spara sérstaklega þegar það þrengir að fjárhagslega. En hvernig er hægt nýta eiginleika tölvuleikja eins og áskoranir og samkeppni til þess að leikjavæða sparnað og hvetja einstaklinga til þess að leggja fyrir og hjálpa þeim að ná sínum fjárhagslegu markmiðum og hafa gaman af því á sama tíma.",
          company: "Auður (Kvika)",
          companyPhotoURL: "/images/sponsors/reboot/AudurSVG.svg",
          detailsPhotoURL: null
        },
        // {
        //   id: 3,
        //   titleEn: "How can we teach and maintain security awareness in the future?",
        //   titleIs: "Hvernig getum við kennt og viðhaldið öryggisvitund í framtíðinni",
        //   textEn: "To Be Announced",
        //   textIs: "Verður Tilkynnt Síðar",
        //   company: "AwareGo",
        //   companyPhotoURL: "/images/sponsors/restart/awarego.png",
        //   detailsPhotoURL: null
        // },
        // {
        //   id: 5,
        //   titleEn: "How can KPMG create increased trust?",
        //   titleIs: "Hverrnig getur KPMG skapað aukið traust?",
        //   textEn: "To Be Announced",
        //   textIs: "Verður Tilkynnt Síðar",
        //   company: "KPMG",
        //   companyPhotoURL: "/images/sponsors/reboot/KPMGSVG.svg",
        //   detailsPhotoURL: null
        // },
        // {
        //   id: 6,
        //   titleEn: "To Be Announced",
        //   titleIs: "Verður Tilkynnt Síðar",
        //   textEn: "To Be Announced",
        //   textIs: "Verður Tilkynnt Síðar",
        //   company: "LHÍ",
        //   companyPhotoURL: "/images/universities/LHI_merki_2017_University_midjusett.png",
        //   detailsPhotoURL: null
        // },
        // {
        //   id: 7,
        //   titleEn: "To Be Announced",
        //   titleIs: "Verður Tilkynnt Síðar",
        //   textEn: "To Be Announced",
        //   textIs: "Verður Tilkynnt Síðar",
        //   company: "Ölgerðin",
        //   companyPhotoURL: "/images/sponsors/restart/olgerdinLogoSVGResizedV2.png",
        //   detailsPhotoURL: null
        // }
      ]
    };
  }
  
  render() {

    var upcomingChallenges, challangesText, challengeInfo, moreDetails; //, postedByText;

    if(Cookies.get('language')=='is'){
      moreDetails = "Meiri upplýsingar";
      upcomingChallenges= "Fleiri áskoranir munu birtast á næstu dögum, fylgstu með! :)";
      challangesText= "Áskoranir";
      challengeInfo= "Hakkaþon snúast ekki um að “hakka” heldur um að skapa. Hægt er að hugsa um hakkaþon sem uppfinningamaraþon eða nýsköpunarkeppni þar sem þátttakendur keppa saman í hópum og vinna í 24 tíma að lausn við þeim áskorunum sem kynntar eru hér fyrir neðan. Verðlaun eru veitt þeim teymum sem finna bestu lausn við hverri og einni áskorun.";
      // postedByText="Skrifað af ";
    }
    else{
      moreDetails = "Mode details";
      upcomingChallenges= "There will be some more upcoming challenges, so make sure to re-visit the webiste :)";
      challangesText= "Challenges";
      challengeInfo= "Hackathons are not about “hacking” but rather creating. Hackathon can be thought of as an invention marathon where students compete in groups and work for 24 hours to develop a solution from scratch, based on challenges presented here below. A prize will be awarded to the team that comes up with the best solution to each challenge.";
      // postedByText="Posted by ";
    }

    var challengeSection = this.state.challenges.map(
      (challenge) => {

        return (
          <div key={challenge.id} className={style.myElement}>
            <h3 className={generalStyle.headerStyle}>{Cookies.get('language')=='is' ? challenge.titleIs : challenge.titleEn}</h3>
            <h5 className={generalStyle.headerStyle+" row "+generalStyle.spacingAfterCompany}>{challenge.companyPhotoURL==null ? null : <img className={style.image+" img-fluid"} src={challenge.companyPhotoURL}/>} </h5>
            <p className={style.textJustify+" "+generalStyle.headerStyle+" "+generalStyle.paragraphStyle}>{Cookies.get('language')=='is' ? challenge.textIs : challenge.textEn}</p>
          
            <button type="button" className={(challenge.detailsPhotoURL==null ? style.myButton : null)+" btn btn-outline-primary btn-lg "+buttonStyle.apply_button} data-toggle="modal" data-target={"#Modal"+challenge.id}>
              {moreDetails}
            </button>


            <div className={"modal fade"} id={"Modal"+challenge.id} tabIndex="-1" role="dialog" aria-labelledby={"Modal"+challenge.id} aria-hidden="true">
              <div className={style.myModalDialog+" modal-dialog"} role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className={style.marginAuto+" modal-title"} id={"Modal"+challenge.id}>{Cookies.get('language')=='is' ? challenge.titleIs : challenge.titleEn}</h5>
                    <button type="button" className={style.buttonClose+" close"} data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className={style.modalBody+" modal-body"}>
                    <img className={"img-fluid"} src={challenge.companyPhotoURL}/>
                  </div>
                 
                </div>
              </div>
            </div>

          </div>
        );
    });

   

    return (
        <div className={"container"}>
          <h1 className={generalStyle.text_styling+" "+generalStyle.text_align}><b>{challangesText}</b></h1>
            <p  className={generalStyle.text_styling+" "+generalStyle.darkGrayColor}>{challengeInfo}</p>
          <div className={style.myDiv}>
            {challengeSection}
          </div>
          <p className={generalStyle.headerStyle+" "+generalStyle.paragraphStyle}>{upcomingChallenges}</p>
        </div>
    );
  }
}


export default Challenges;