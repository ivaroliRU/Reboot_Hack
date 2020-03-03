import React, { Component } from 'react';
import style from './schedule.css';
import Cookies from 'js-cookie';
import ReactDOMServer from 'react-dom/server';
import buttonStyle from '../../applyButton/applyButton.css';
import {isMobile} from 'react-device-detect';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scheduleEnLink: "/images/SchedulePNG.png",
      scheduleIsLink: "/images/DagskráPNG.png",
      schedule_events_saturday: [
        {
          id: 0,
          startHour: "8:00",
          textEn: "Registration opens ✔️",
          textIs: "Hús opnar & innritun hefst ✔️",
          descriptionEn: "We recommend coming early to enjoy the breakfast and merch!",
          descriptionIs: "Hvetjum ykkur til að mæta snemma og njóta morgunmatsins!",
          locationEn: "Askja, entrence",
          locationIs: "Askja, inngangur",
          relevantLink: null
        },
        {
          id: 1,
          startHour: "8:30", 
          textEn: "Breakfast & schedule presented 🥐",
          textIs: "Morgunmatur & dagskrá kynnt 🥐",
          descriptionEn: "Something for everyone - don’t forget your water bottle and reusable coffee cup to fill up!",
          descriptionIs: "Eitthvað fyrir alla - ekki gleyma fjölnota drykkjarmálum!",
          locationEn: "Askja, main hall",
          locationIs: "Askja, aðalrými",
          relevantLink: null
        },
        {
          id: 2,
          startHour: "10:00",
          textEn: "Opening Ceremony 📢",
          textIs: "Setningarathöfn 📢",
          descriptionEn: "Opening speech by our Minister of Innovation, Thordis Kolbrún as well as the challenges will be presented!",
          descriptionIs: "Opnunarávarp frá Þórdísi Kolbrúnu nýsköpunarráðherra ásamt því að áskoranir verða kynntar! ",
          locationEn: "Askja, room 132",
          locationIs: "Askja, salur 132",
          relevantLink: null
        },
        {
          id: 3,
          startHour: "10:30",
          textEn: "Team Forming 👋",
          textIs: "Liðamyndun 👋",
          descriptionEn: "We recommend diverse teams!",
          descriptionIs: "Við mælum með fjölbreyttum liðum!",
          locationEn: "Askja, main hall",
          locationIs: "Askja, aðalrými",
          relevantLink: null
        },
        {
          id: 4,
          startHour: "11:30",
          textEn: "Lunch & hacking begins 🌮🌮",
          textIs: "Hádegismatur & vinnulota hefst 🌮🌮",
          descriptionEn: "Something for everyone - don’t forget your water bottle and reusable coffee cup to fill up! 👩‍💻👨‍💻",
          descriptionIs: "Eitthvað fyrir alla - ekki gleyma fjölnota drykkjarmálum!  👩‍💻👨‍💻",
          locationEn: "Askja",
          locationIs: "Askja",
          relevantLink: null
        },
        {
          id: 5,
          startHour: "13:00",
          textEn: "Workshops start🧠",
          textIs: "Vinnustofur hefjast 🧠",
          descriptionEn: "There will be a workshop every 30 minutes - we recommend attending them!",
          descriptionIs: "Vinnustofurnar verða á hálftíma fresti - við hvetjum ykkur til að mæta á sem flestar til þess að fá enn meira út úr reynslunni!",
          locationEn: "Askja, rooms 129 & 130",
          locationIs: "Askja, stofur 129 & 130",
          relevantLink: null
        },
        {
          id: 6,
          startHour: "15:00",
          textEn: "Coffee break ☕☕",
          textIs: "Kaffitími ☕☕",
          descriptionEn: "Don’t forget your water bottle and reusable coffee cup to fill up! ☕️",
          descriptionIs: "Ekki gleyma fjölnota drykkjarmálum! ☕️",
          locationEn: "Askja, main hall",
          locationIs: "Askja, aðalrými",
          relevantLink: null
        },
        {
          id: 7,
          startHour: "17:00",
          textEn: "Workshops end ❌🧠",
          textIs: "Vinnustofnum lýkur ❌🧠",
          descriptionEn: "",
          descriptionIs: "",
          locationEn: "",
          locationIs: "",
          relevantLink: null
        },
        {
          id: 8,
          startHour: "19:00",
          textEn: "Dinner 🍕🍽",
          textIs: "Kvöldmatur 🍕🍽",
          descriptionEn: "Something for everyone - don’t forget your water bottle and reusable coffee cup to fill up!",
          descriptionIs: "Eitthvað fyrir alla - ekki gleyma fjölnota drykkjarmálum!",
          locationEn: "Askja, main hall",
          locationIs: "Askja, aðalrými",
          relevantLink: null
        },
        {
          id: 9,
          startHour: "21:00",
          textEn: "Pitch Workshop 💥",
          textIs: "“Pitch” vinnustofa 💥",
          descriptionEn: "🤠",
          descriptionIs: "🤠",
          locationEn: "",
          locationIs: "",
          relevantLink: null
        },{
          id: 10,
          startHour: "21:50",
          textEn: "Yoga 🙆🧘",
          textIs: "Jóga 🙆🧘",
          descriptionEn: "It's good to stand up from time to time. Come and join a yoga session!",
          descriptionIs: "Það er mikivægt að standa upp af og til. Komdu í Yoga með okkur!",
          locationEn: "",
          locationIs: "",
          relevantLink: null
        },
        {
          id: 11,
          startHour: "22:30",
          textEn: "Surprise 💥💥",
          textIs: "Óvænt uppákoma 💥💥",
          descriptionEn: "",
          descriptionIs: "",
          locationEn: "",
          locationIs: "",
          relevantLink: null
        },
        {
          id: 12,
          startHour: "23:30",
          textEn: "Midnight Snack 🌜🍭",
          textIs: "Miðnætursnarl 🌜🍭",
          descriptionEn: "Something for everyone - don’t forget your water bottle and reusable coffee cup to fill up! Sponsored by Ölgerðin.",
          descriptionIs: "Eitthvað fyrir alla - ekki gleyma fjölnota drykkjarmálum! Í boði Ölgerðarinnar.",
          locationEn: "Askja - Main hall",
          locationIs: "Askja - Main hall",
          relevantLink: null
        }
      ],
      schedule_events_sunday: [
        {
          id: 13,
          startHour: "08:00",
          textEn: "Breakast 🥞🥞",
          textIs: "Morgunmatur 🥞🥞",
          descriptionEn: "Something for everyone - don’t forget your water bottle and reusable coffee cup to fill up!",
          descriptionIs: "Eitthvað fyrir alla - ekki gleyma fjölnota drykkjarmálum!",
          locationEn: "Askja",
          locationIs: "Askja",
          relevantLink: null
        },
        {
          id: 14,
          startHour: "11:00",
          textEn: "Submissions close 👐🧻",
          textIs: "Vinnulotu lýkur - skil á lokaafurð liða 👐🧻",
          descriptionEn: "Submit your project here:",
          descriptionIs: "Skila á lokaafurð fer fram í gegnum:",
          locationEn: "",
          locationIs: "",
          relevantLink: "https://reboothack-2020.devpost.com/"
        },
        {
          id: 15,
          startHour: "11:30",
          textEn: "Lunch 🥪🍱",
          textIs: "Hádegismatur 🥪🍱",
          descriptionEn: "Something for everyone - don’t forget your water bottle and reusable coffee cup to fill up!",
          descriptionIs: "Eitthvað fyrir alla - ekki gleyma fjölnota drykkjarmálum!",
          locationEn: "Askja",
          locationIs: "Askja",
          relevantLink: null
        },
        {
          id: 16,
          startHour: "12:00",
          textEn: "Pitches 🎤💡",
          textIs: "Kynningar á lokaafurð liða 🎤💡",
          descriptionEn: "The pitches are set up as a “science fair” and the judges will visit each team that they will be judging.",
          descriptionIs: "Kynningarnar verða á “science fair” formi þar sem dómarar labba á milli þeirra teyma sem þeir dæma.",
          locationEn: "Askja",
          locationIs: "Askja, aðalrými",
          relevantLink: null
        },
        {
          id: 17,
          startHour: "13:30",
          textEn: "Pitches end & judges deliberate ⏲️",
          textIs: "Kynningum lýkur & dómnefnd tekur til starfa",
          descriptionEn: "Exciting!",
          descriptionIs: "Spennandi!",
          locationEn: "",
          locationIs: "",
          relevantLink: null
        },
        {
          id: 18,
          startHour: "14:15",
          textEn: "Top 5 teams present & Award Ceremony 🥇",
          textIs: "Top 5 lið kynna - verðlaunaafhending",
          descriptionEn: "We can’t wait!",
          descriptionIs: "Við getum ekki beðið!",
          locationEn: "Askja, room 132",
          locationIs: "Askja, room 132",
          relevantLink: null
        }
      ]
    };
  }
  
  
  render() {

    var downloadText, infoText, scheduleText, timelineDescription, imageSRC, ShowFullScheduleText, saturdayText, sundayText, smallText;

    if(Cookies.get('language')=='is'){
      infoText="Ýttu á einstaka þætti dagskráarinnar til að fá auka upplýsingar!";
      saturdayText = "Laugardagur";
      sundayText = "Sunnudagur";
      imageSRC = this.state.scheduleIsLink;
      ShowFullScheduleText = "Öll dagskrá";
      downloadText="Smelltu á myndina til þess að hlaða niður myndinni!";
      // smallText='Við munum uppfæra dagskrána svo kíktu á síðuna okkar reglulega!';
    }
    else{
      infoText="Push any entry in the schedule to get more info!";
      saturdayText = "Saturday";
      sundayText = "Sunday";
      imageSRC = this.state.scheduleEnLink;
      ShowFullScheduleText = "Show full schedule";
      downloadText="Click on this image to download it!";
      // smallText='We will update our schedule so make sure to revisit the site!';
    }

    timelineDescription = (
      <p> 
        {infoText}
      </p>
    );

    function updateText(day, descriptionIs, descriptionEn, locationIs, locationEn, relevantLink){
      
      timelineDescription = (
        <div>
          <p>{Cookies.get('language')=='is' ? descriptionIs : descriptionEn}</p>
          <p className={style.schedule_dot_location}> {(locationIs == "" || locationEn == "" ) ? null : <i className={"fa fa-map-marker"} />} {Cookies.get('language')=='is' ? locationIs : locationEn}</p>
          {relevantLink !==null ? <a href={relevantLink} target="_blank">{relevantLink}</a> : null}
        </div>
      );
      if(day==0){
        document.getElementById(style.timeline_descriptions_wrapper1).innerHTML = ReactDOMServer.renderToStaticMarkup(timelineDescription);
      }
      else{
        document.getElementById(style.timeline_descriptions_wrapper2).innerHTML = ReactDOMServer.renderToStaticMarkup(timelineDescription);
      }
    }
    

    var scheduleSection_sunday = this.state.schedule_events_sunday.map(
      (someEvent) => {
        return [
          (
            <input 
              key={someEvent.id}
              className={style.input+" "+style.extra_margin} 
              type="radio" 
              name="timeline-dot" 
              data-description="1" 
              value={someEvent.startHour}
              onClick={() => updateText(1, someEvent.descriptionIs, someEvent.descriptionEn, someEvent.locationIs, someEvent.locationEn, someEvent.relevantLink)}/>
          ),
          (
            <div
              id={"Schedule_Element"+someEvent.id}
              key={someEvent.id+10}
              className={style.dot_info+" "+style.extra_margin} 
              data-description="1">
              <span className={style.span+" "+style.year}>{someEvent.startHour}</span>
              <span className={style.span+" "+style.label}>{Cookies.get('language')=='is' ? someEvent.textIs : someEvent.textEn}</span>
            </div>
          )
        ];
      }
    );

    var scheduleSection_saturday = this.state.schedule_events_saturday.map(
      (someEvent) => {
        return [
          (
            <input 
              key={someEvent.id}
              className={style.input} 
              type="radio" 
              name="timeline-dot" 
              data-description="1"
              value={someEvent.startHour}
              onClick={() => updateText(0, someEvent.descriptionIs, someEvent.descriptionEn, someEvent.locationIs, someEvent.locationEn, someEvent.relevantLink)}/>
          ),
          (
            <div 
              id={"Schedule_Element"+someEvent.id}
              key={someEvent.id+10}
              className={style.dot_info} 
              data-description="1">
              <span className={style.span+" "+style.year}>{someEvent.startHour}</span>
              <span className={style.span+" "+style.label}>{Cookies.get('language')=='is' ? someEvent.textIs : someEvent.textEn}</span>
              {someEvent.relevantLink !==null ? <a href={someEvent.relevantLink} target="_blank">{someEvent.relevantLink}</a> : null}
            </div>
          )
        ];
      }
    );

    function changeToSaturdaySchedule(){
      document.getElementById(style.schedule_saturday).style.display = 'block'; // show
      document.getElementById(style.schedule_sunday).style.display = 'none'; // hide
    }

    function changeToSundaySchedule(){
      document.getElementById(style.schedule_saturday).style.display = 'none'; // show
      document.getElementById(style.schedule_sunday).style.display = 'block'; // hide
    }
    
    return (
        <div className={style.myDiv+" container"}>

          <center> 

            <button type="button" className={"btn btn-outline-primary btn-lg "+buttonStyle.apply_button} data-toggle="modal" data-target={"#modal_for_schedule"}>
              {ShowFullScheduleText}
            </button>

            <div className={"modal fade"} id={"modal_for_schedule"} tabIndex="-1" role="dialog" aria-labelledby={"modal_for_schedule"} aria-hidden="true">
              <div className={style.my_modal_dialog+" modal-dialog"} role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className={style.modal_header_style+" row"}>
                      
                      <h5 className={"modal-title"} id={"modal_for_schedule"}> {scheduleText}</h5>
                    </div>
                    <button type="button" className={style.button_close+" close"} data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className={style.modal_body+" modal-body"}>
                    <a href={imageSRC} download>
                      <img className={"img-fluid "} src={imageSRC} title={downloadText}/>
                    </a>
                  </div>
                 
                </div>
              </div>
            </div>

            <br/><br/>
            
            <button 
              type="button" 
              className={"btn btn-outline-primary btn-lg "+buttonStyle.apply_button}
              onClick={() => changeToSaturdaySchedule()}>
                {saturdayText}
            </button>
            <p className={style.display_initial}>&nbsp;</p> <p className={ (Cookies.get('language')=='is' && isMobile) ? style.display_on_mobile_when_icelandic_is_on : style.hide_on_mobile_when_icelandic_is_on}>&nbsp;</p>
            <button 
              type="button" 
              className={"btn btn-outline-primary btn-lg "+buttonStyle.apply_button+" "+((Cookies.get('language')=='is' && isMobile) ? style.btn_margin_top : null)}
              onClick={() => changeToSundaySchedule()}>
                {sundayText}
            </button>
          </center> 
    
          <div className={style.display_on_bigger_screens_only}>
            <br /><br /><br /><br /><br /><br />
          </div>
          

          <div 
          id={style.schedule_saturday}
          className={style.flex_parent}>
            <div className={style.input_flex_container+" "+style.input_flex_container_straight}>

              {scheduleSection_saturday}
                        

              <div id={style.timeline_descriptions_wrapper1}>
                {timelineDescription}
              </div>
            </div>
          </div> 

          <div 
            id={style.schedule_sunday}
            className={style.flex_parent}>
            <div className={style.input_flex_container+" "+style.input_flex_container_straight+" "+style.input_flex_container_smaller}>

              {scheduleSection_sunday}
                        

              <div id={style.timeline_descriptions_wrapper2}>
                {timelineDescription}
              </div>
            </div>
          </div> 
          {/* <small>{smallText}</small> */}

        </div>
        
    );
  }
}


export default Schedule;