import React, { Component } from 'react';
import style from './verticalNavigation.css';
import Cookies from 'js-cookie';

class VerticalNavigation extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {

        function sectionSelected(selectedNumber, selectedChallengeNumber){
            var i;
            // Clean up the classes for Sections
            for(i=1;i<=5;i++){
                document.getElementById("Section"+i).classList.remove(style.color_fade);
                document.getElementById("Section"+i).classList.remove(style.bigger_font);
                document.getElementById("Section"+i).classList.remove(style.color_strong);
            }

            // make the color of the previous selections FADE and the challenges if it is the case
            for(i=1;i<selectedNumber;i++){
                document.getElementById("Section"+i).classList.add(style.color_fade);
            }

        
            // make the color of the selected section STRONGER and BIGGER
            document.getElementById("Section"+selectedNumber).classList.add(style.color_strong);
            document.getElementById("Section"+selectedNumber).classList.add(style.bigger_font);
            

            // add bigger font on this selection
            for(i=selectedNumber+1;i<=5;i++){
                document.getElementById("Section"+i).classList.add(style.color_normal);
            }

            // same procedure for Challenges
            for(i=1; i<=8; i++){
                document.getElementById("Challenge"+i).classList.remove(style.challenge_text_color_fade);
                document.getElementById("Challenge"+i).classList.remove(style.bigger_font);
                document.getElementById("Challenge"+i).classList.remove(style.challenge_text_color_strong);
                document.getElementById("Challenge"+i).classList.remove(style.challenge_text_color_normal);
                
            }

            if(selectedNumber<=2 && selectedChallengeNumber<9){
                
                for(i=1;i<=8;i++){
                    document.getElementById("Challenge"+i).classList.add(style.challenge_text_color_fade);
                }
                
                document.getElementById("Challenge"+selectedChallengeNumber).classList.add(style.challenge_text_color_strong);
                document.getElementById("Challenge"+selectedChallengeNumber).classList.add(style.bigger_font);
            
                for(i=selectedChallengeNumber+1;i<=8;i++){
                    document.getElementById("Challenge"+i).classList.add(style.challenge_text_color_normal);
                }
            }
            else{
                for(i=1;i<=8;i++){
                    document.getElementById("Challenge"+i).classList.add(style.challenge_text_color_fade);
                }
            }

        }

        function isScrolledIntoView(elem)
        {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }

        // auto update on scroll
        $(window).scroll(function() {   
            
            if(isScrolledIntoView($('#Events_Section'))
               || isScrolledIntoView($('#Events_Element0'))
               || isScrolledIntoView($('#Events_Element1'))
               || isScrolledIntoView($('#Events_Element2'))
               || isScrolledIntoView($('#Events_Element3'))
               || isScrolledIntoView($('#Events_Element4'))
               || isScrolledIntoView($('#Events_Element5'))
               || isScrolledIntoView($('#Events_Element6'))
               || isScrolledIntoView($('#Events_Element7'))
               )
            {
                sectionSelected(2,9);
            } 
            
            if(isScrolledIntoView($('#Challenges_Section'))
              || isScrolledIntoView($('#Origo'))
              || isScrolledIntoView($('#Vörður'))
              || isScrolledIntoView($('#Auður'))
              || isScrolledIntoView($('#Byggðastofnun'))
              || isScrolledIntoView($('#AwareGo'))
              || isScrolledIntoView($('#KPMG'))
              || isScrolledIntoView($('#LHÍ'))
              || isScrolledIntoView($('#Ölgerðin'))

            )
            {
                if(isScrolledIntoView($('#Origo'))){
                    sectionSelected(1,1);
                }

                if(isScrolledIntoView($('#Vörður'))){
                    sectionSelected(1,2);
                }

                if(isScrolledIntoView($('#Auður'))){
                    sectionSelected(1,3);
                }

                if(isScrolledIntoView($('#Byggðastofnun'))){
                    sectionSelected(1,4);
                }

                if(isScrolledIntoView($('#AwareGo'))){
                    sectionSelected(1,5);
                }

                if(isScrolledIntoView($('#KPMG'))){
                    sectionSelected(1,6);
                }

                if(isScrolledIntoView($('#LHÍ'))){
                    sectionSelected(1,7);
                }

                if(isScrolledIntoView($('#Ölgerðin'))){
                    sectionSelected(1,8);
                }
                // sectionSelected(1,9);
            }

            if(isScrolledIntoView($('#Schedule_Section'))
               || isScrolledIntoView($('#Schedule_Element0'))
               || isScrolledIntoView($('#Schedule_Element1'))
               || isScrolledIntoView($('#Schedule_Element2'))
               || isScrolledIntoView($('#Schedule_Element3'))
               || isScrolledIntoView($('#Schedule_Element4'))
               || isScrolledIntoView($('#Schedule_Element5'))
               || isScrolledIntoView($('#Schedule_Element6'))
               || isScrolledIntoView($('#Schedule_Element7'))
               || isScrolledIntoView($('#Schedule_Element8'))
               || isScrolledIntoView($('#Schedule_Element9'))
               || isScrolledIntoView($('#Schedule_Element10'))
               || isScrolledIntoView($('#Schedule_Element11'))
               || isScrolledIntoView($('#Schedule_Element12'))
               || isScrolledIntoView($('#Schedule_Element13'))
               || isScrolledIntoView($('#Schedule_Element14'))
               || isScrolledIntoView($('#Schedule_Element15'))
               || isScrolledIntoView($('#Schedule_Element16'))
               || isScrolledIntoView($('#Schedule_Element17'))
               )
            {
                sectionSelected(3,9);
            } 
            if(isScrolledIntoView($('#Instagram_Section')) 
            // || isScrolledIntoView($('#InstagramPost')))
            )
            {
                sectionSelected(4,9);
            } 
            if(isScrolledIntoView($('#Location_Section')))
            {
                sectionSelected(5,9);
            }    
        });


        return (
            <div className={style.vertical_navigation_div}>
                <div className={style.diagonal_text+" "+style.diagonal_text_straight}>
                    <a 
                        id="Section1" 
                        className={style.a_modified} 
                        href="/event#Challenges_Section" 
                        onClick={() => sectionSelected(1,9)}>Challenges</a><br />
                </div>
                

                <div className={style.diagonal_text+" "+style.diagonal_text_straight+" "+style.challenge_div+" "+style.challenge_div_straight}>
                    <a 
                        id="Challenge1" 
                        className={style.challenge_text+" "+style.challenge_text_straight+" "+style.challenge_text_color_normal} 
                        href="/event#Origo" 
                        onClick={() => sectionSelected(1,1)}>Origo</a><br />
                </div>

                <div className={style.diagonal_text+" "+style.diagonal_text_straight+" "+style.challenge_div+" "+style.challenge_div_straight}>
                    <a 
                        id="Challenge2" 
                        className={style.challenge_text+" "+style.challenge_text_straight+" "+style.challenge_text_color_normal} 
                        href="/event#Vörður" 
                        onClick={() => sectionSelected(1,2)}>Vörður</a><br />
                </div>

                <div className={style.diagonal_text+" "+style.diagonal_text_straight+" "+style.challenge_div+" "+style.challenge_div_straight}>
                    <a 
                        id="Challenge3" 
                        className={style.challenge_text+" "+style.challenge_text_straight+" "+style.challenge_text_color_normal} 
                        href="/event#Auður" 
                        onClick={() => sectionSelected(1,3)}>Auður</a><br />
                </div>

                <div className={style.diagonal_text+" "+style.diagonal_text_straight+" "+style.challenge_div+" "+style.challenge_div_straight}>
                    <a 
                        id="Challenge4" 
                        className={style.challenge_text+" "+style.challenge_text_straight+" "+style.challenge_text_color_normal} 
                        href="/event#Byggðastofnun" 
                        onClick={() => sectionSelected(1,4)}>Byggðastofnun</a><br />
                </div>

                <div className={style.diagonal_text+" "+style.diagonal_text_straight+" "+style.challenge_div+" "+style.challenge_div_straight}>
                    <a 
                        id="Challenge5" 
                        className={style.challenge_text+" "+style.challenge_text_straight+" "+style.challenge_text_color_normal} 
                        href="/event#AwareGo" 
                        onClick={() => sectionSelected(1,5)}>AwareGo</a><br />
                </div>

                <div className={style.diagonal_text+" "+style.diagonal_text_straight+" "+style.challenge_div+" "+style.challenge_div_straight}>
                    <a 
                        id="Challenge6" 
                        className={style.challenge_text+" "+style.challenge_text_straight+" "+style.challenge_text_color_normal} 
                        href="/event#KPMG" 
                        onClick={() => sectionSelected(1,6)}>KPMG</a><br />
                </div>

                <div className={style.diagonal_text+" "+style.diagonal_text_straight+" "+style.challenge_div+" "+style.challenge_div_straight+" "+style.last_challenge_padding_bottom_normal+" "+style.last_challenge_padding_bottom_normal_straight}>
                    <a 
                        id="Challenge7" 
                        className={style.challenge_text+" "+style.challenge_text_straight+" "+style.challenge_text_color_normal} 
                        href="/event#LHÍ" 
                        onClick={() => sectionSelected(1,7)}>LHÍ</a><br />
                </div>

                <div className={style.diagonal_text+" "+style.diagonal_text_straight+" "+style.challenge_div+" "+style.challenge_div_straight+" "+style.last_challenge_padding_bottom_normal+" "+style.last_challenge_padding_bottom_normal_straight}>
                    <a 
                        id="Challenge8" 
                        className={style.challenge_text+" "+style.challenge_text_straight+" "+style.challenge_text_color_normal} 
                        href="/event#Ölgerðin" 
                        onClick={() => sectionSelected(1,8)}>Ölgerðin</a><br />
                </div>

                <div className={style.diagonal_text+" "+style.diagonal_text_straight}>
                    <a 
                        id="Section2" 
                        className={style.a_modified} 
                        href="/event#Events_Section" 
                        onClick={() => sectionSelected(2,9)}>Mini events</a>
                </div>
                <div className={style.diagonal_text+" "+style.diagonal_text_straight}>
                    <a 
                        id="Section3" 
                        className={style.a_modified} 
                        href="/event#Schedule_Section" 
                        onClick={() => sectionSelected(3,9)}>Schedule</a>
                </div>
                <div className={style.diagonal_text+" "+style.diagonal_text_straight}>
                    <a 
                        id="Section4" 
                        className={style.a_modified} 
                        href="/event#Instagram_Section" 
                        onClick={() => sectionSelected(4,9)}>Instagram</a>
                </div>
                <div className={style.diagonal_text+" "+style.diagonal_text_straight}>
                    <a 
                        id="Section5" 
                        className={style.a_modified} 
                        href="/event#Location_Section" 
                        onClick={() => sectionSelected(5,9)}>Location</a>
                </div>
            </div>
    );
  }
}


export default VerticalNavigation;