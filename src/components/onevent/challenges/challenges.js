import React, { Component } from 'react';
import style from './challenges.css';
import generalStyle from '../onevent.css';
import Cookies from 'js-cookie';

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
          company: "Origo"
        },
        {
          id: 4,
          titleEn: "How will insurance services look like in the future?",
          titleIs: "Hvernig verður tryggingarþjónusta í framtíðinni?",
          textEn: "Insurance provides the peace of mind knowing that if something happens you are covered. Evolution into the digital world is happening fast and the financial sector is already on its way automating services for the benefit of the customer. The evolution of it is still in progress but what do you see happening?    How do we meet the customer needs on their terms and through the medium they choose when claims happens or when buying insurance?   How do we make sure our customers have the right level of coverage at the right price?",
          textIs: "Tryggingar snúast um að veita fólki þá hugarró sem felst í að vita að ef eitthvað kemur upp á þá ertu tryggður. Stafræn þróun er hröð og áhrifa er þegar farið að gæta hjá fjármálafyrirtækjum sem eru í auknum mæli farin að sjálfvirknivæða þjónustu. Það sér ekki fyrir endann á þeirri þróun en hvað sjáið þið?    Hvernig mætum við þörfum viðskiptavina á þeirra forsendum og í gegnum þá miðla sem þeir kjósa þegar kemur að tjóni eða kaupum á tryggingum?    Hvernig tryggjum við að viðskiptavinir okkar séu rétt tryggðir og rétt verðlagðir?",
          company: "Vörður"
        },
        {
          id: 0,
          titleEn: "Jobs without specified location",
          titleIs: "Störf án staðsetningar",
          textEn: "To Be Announced",
          textIs: "Verður Tilkynnt Síðar",
          company: "Byggðastofnun"
        },
       
        // {
        //   id: 2,
        //   titleEn: "To Be Announced",
        //   titleIs: "Verður Tilkynnt Síðar",
        //   textEn: "To Be Announced",
        //   textIs: "Verður Tilkynnt Síðar",
        //   company: "Auður (Kvika)"
        // },
        {
          id: 3,
          titleEn: "How can we teach and maintain security awareness in the future?",
          titleIs: "Hvernig getum við kennt og viðhaldið öryggisvitund í framtíðinni",
          textEn: "To Be Announced",
          textIs: "Verður Tilkynnt Síðar",
          company: "AwareGo"
        },
        {
          id: 5,
          titleEn: "How can KPMG create increased trust?",
          titleIs: "Hverrnig getur kpmg skapað aukið traust?",
          textEn: "To Be Announced",
          textIs: "Verður Tilkynnt Síðar",
          company: "KPMG"
        },
        // {
        //   id: 6,
        //   titleEn: "To Be Announced",
        //   titleIs: "Verður Tilkynnt Síðar",
        //   textEn: "To Be Announced",
        //   textIs: "Verður Tilkynnt Síðar",
        //   company: "TVG Zimzsen"
        // },
        // {
        //   id: 7,
        //   titleEn: "To Be Announced",
        //   titleIs: "Verður Tilkynnt Síðar",
        //   textEn: "To Be Announced",
        //   textIs: "Verður Tilkynnt Síðar",
        //   company: "Ölgerðin"
        // }
      ]
    };
  }
  
  render() {

    var upcomingChallenges, challangesText, postedByText;

    if(Cookies.get('language')=='is'){
      upcomingChallenges= "Það munu koma inn fleiri áskoranir, svo heimsóttu síðuna reglulega :)";
      challangesText= "Áskoranir";
      postedByText="Skrifað af ";
    }
    else{
      upcomingChallenges= "There will be some more upcoming challenges, so make sure to re-visit the webiste :)";
      challangesText= "Challenges";
      postedByText="Posted by ";
    }

    var challengeSection = this.state.challenges.map(
      (challenge) => {

        return (
          <div key={challenge.id} className={style.myElement}>
            <h3 className={generalStyle.text_styling}>{Cookies.get('language')=='is' ? challenge.titleIs : challenge.titleEn}</h3>
            <h5 className={generalStyle.text_styling}>{postedByText} {challenge.company}</h5>
            <p className={style.textJustify+" "+generalStyle.text_styling+" "+generalStyle.darkGrayColor}>{Cookies.get('language')=='is' ? challenge.textIs : challenge.textEn}</p>
          </div>
        );
    });

   

    return (
        <div className={"container"}>
          <h2 className={generalStyle.text_styling+" "+generalStyle.text_align}><b>{challangesText}</b></h2>

          <div className={style.myDiv}>
            {challengeSection}
          </div>
          <p className={generalStyle.text_styling+" "+generalStyle.darkGrayColor}>{upcomingChallenges}</p>
        </div>
    );
  }
}


export default Challenges;